import * as firebase from 'firebase';
import {
	BANNER_FETCH,
	BANNER_UPDATE
} from './types';

export const bannerFetch = () => {
	return (dispatch) {
		let bannerRef = firebase.database().ref('banner')
		bannerRef.once('value', function(snapshot) {
			dispatch({ type: BANNER_FETCH, payload: snapshot.val() });
		})
	}
}