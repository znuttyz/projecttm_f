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

export const bannerUpdate = (postData) => {
	return (dispatch) => {
		firebase.database().ref('banner').update(postData)
		.then(res => dispatch({ type: BANNER_UPDATE, payload: true }))
	}
}