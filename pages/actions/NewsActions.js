import * as firebase from 'firebase';
import {
	NEWS_FETCH,
	NEWS_CREATE,
	NEWS_UPDATE,
	NEWS_DELETE,
	NEWS_FETCH_IMAGE,
	NEWS_CREATE_IMAGE,
	NEWS_DELETE_IMAGE
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

export const newsUpdate = (id, postData) => {
	return (dispatch) => {
		firebase.database().ref('news/'+id).update(postData)
		.then(res => dispatch({ type: NEWS_UPDATE, payload: true }))
	}
}

export const newsCreateImageById = (id, postData) => {
	return (dispatch) => {
		firebase.database().ref('news/'+id+'/images/').push(postData)
		.then(res => dispatch({ type: NEWS_CREATE_IMAGE }))
	}
}

export const newsFetchImageById = (id) => {
	return (dispatch) => {
		console.log('newsFetchImageById')
		let	newsRef = firebase.database().ref('news/'+id+'/images')
		newsRef.once('value', function(snapshot) {
			let images = [];
			snapshot.forEach(function(childSnapshot) {
		      let childData = childSnapshot.val();
		      // childData.key = childSnapshot.key;
		      images.push(childData);
		    });
			dispatch({ type: NEWS_FETCH_IMAGE, payload: images })
		})
	}
}

export const newsDeleteById = (id) => {
	return (dispatch) => {
		firebase.database().ref('news/'+id).remove()
	}
}

export const newsDeleteImageById = (id, name) => {
	return (dispatch) => {
		let	newsRef = firebase.database().ref('news/'+id+'/images')
		newsRef.once('value', snapshot => {
			snapshot.forEach(function(childSnapshot) {
		    	let childData = childSnapshot.val();
		    	if(childSnapshot.val() === name) {
		    		childSnapshot.ref.remove()
		    		dispatch({ type: NEWS_DELETE_IMAGE, payload: true })
		    	}
		    });
		})
	}
}