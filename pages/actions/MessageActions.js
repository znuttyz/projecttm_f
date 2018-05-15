import * as firebase from 'firebase';
import {
	MESSAGE_CREATE,
	MESSAGE_FETCH
} from './types';

export const messageCreate = (postData) => {
	return (dispatch) => {
		const messageRef = firebase.database().ref('message').push()
		const id = messageRef.key
		postData.id = id
		messageRef.set(postData)
		.then(() => {
			dispatch({ type: MESSAGE_CREATE, payload: true });
		});
	}
}

export const messageFetch = () => {
	return (dispatch) => {
		let	messageRef = firebase.database().ref('message')
		messageRef.once('value', function(snapshot) {
			let data = []
			snapshot.forEach(childSnapshot => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: MESSAGE_FETCH, payload: data.reverse() });
		})
	}
}