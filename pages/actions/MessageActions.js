import * as firebase from 'firebase';
import {
	MESSAGE_CREATE,
	MESSAGE_FETCH,
	MESSAGE_SET_STATUS,
	MESSAGE_DELETE
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

export const messageSetStatus = (id) => {
	return (dispatch) => {
		firebase.database().ref('message/'+id).update({status: 1})
		.then(res => dispatch({ type: MESSAGE_SET_STATUS, payload: true }))
	}
}

export const messageDelete = (id) => {
	return(dispatch) => {
		firebase.database().ref('message/'+id).remove()
		.then(res => dispatch({ type: MESSAGE_DELETE, payload: true }))
	}
}