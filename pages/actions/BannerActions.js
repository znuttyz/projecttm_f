import * as firebase from 'firebase';
import {
	BANNER_FETCH,
	BANNER_UPDATE,
	BANNER_FETCH_HOME
} from './types';

export const bannerFetch = () => {
	return (dispatch) => {
		let bannerRef = firebase.database().ref('banner')
		bannerRef.once('value', function(snapshot) {
			dispatch({ type: BANNER_FETCH, payload: snapshot.val() });
		})
	}
}

export const bannerUpdate = (postData) => {
	return (dispatch) => {
		firebase.database().ref('banner').update(postData)
		.then(res => dispatch({ type: BANNER_UPDATE, payload: true }))
	}
}

export const bannerFetchHome = () => {
	return (dispatch) => {
		let home = []
		let bannerRef = firebase.database().ref('banner')
		let promise = new Promise((resolve, reject) => {
		  	bannerRef.once('value', function(snapshot) {
				home.push(snapshot.val())
				resolve()
			})
		})
		promise.then(() => {
			let	promotionRef = firebase.database().ref('promotion').limitToLast(4);
			promotionRef.once('value', function(snapshot) {
				let data = []
				snapshot.forEach(childSnapshot => {
					let item = childSnapshot.val()
					data.push(item)
				})
				home.push(data.reverse())
				dispatch({ type: BANNER_FETCH_HOME, payload: home });
			})
		})
		
	}
}