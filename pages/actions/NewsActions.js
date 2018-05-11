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
			snapshot.forEach((childSnapshot, index) => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: NEWS_FETCH, payload: data });
		})
	}
}

export const newsCreate = (postData) => {
	return (dispatch) => {
		firebase.database().ref('news').push(postData)
		.then(() => {
			dispatch({ type: NEWS_CREATE, payload: true });
		});
	}
}