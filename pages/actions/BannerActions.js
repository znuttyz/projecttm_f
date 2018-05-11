import * as firebase from 'firebase';
import {
	BANNER_FETCH,
	BANNER_UPDATE
} from './types';

export const bannerFetch = () => {
	return (dispatch) => {
		let bannerRef = firebase.database().ref('banner')
		bannerRef.once('value', function(snapshot) {
			dispatch({ type: BANNER_FETCH, payload: snapshot.val() });
		})
	}
}

export const bannerUpdate = (name, src, tag) => {
	return (dispatch) => {
		let date = new Date().toJSON().slice(0,10).replace(/-/g,'/')
		let postData = { name, src, tag, date }
		firebase.database().ref('banner').update(postData)
		.then(res => dispatch({ type: BANNER_UPDATE, payload: true }))
	}
}