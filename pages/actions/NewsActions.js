import * as firebase from 'firebase';
import {
	NEWS_FETCH,
	NEWS_CREATE
} from './types';

export const newsFetch = () => {
	return (dispatch) => {
		let	newsRef = firebase.database().ref('news')
		newsRef.once('value', function(snapshot) {
			let data = []
			snapshot.forEach(childSnapshot => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: NEWS_FETCH, payload: data.reverse() });
		})
	}
}

export const newsFetchById = (id) => {
	return (dispatch) => {
		console.log('newsFetchById', id)
		let	newsRef = firebase.database().ref('news/'+id)
		newsRef.once('value', function(snapshot) {
			dispatch({ type: NEWS_FETCH, payload: snapshot.val() })
		})
	}
}

export const newsCreate = (postData) => {
	return (dispatch) => {
		const newsRef = firebase.database().ref('news').push()
		const id = newsRef.key
		postData.id = id
		newsRef.set(postData)
		.then(() => {
			dispatch({ type: NEWS_CREATE, payload: true });
		});
	}
}