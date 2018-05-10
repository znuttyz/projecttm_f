import * as firebase from 'firebase';
import {
	NEWS_FETCH,
} from './types';

export const newsFetch = () => {
	return (dispatch) => {
		let	newsRef = firebase.database().ref('news')
		newsRef.once('value', function(snapshot) {
			dispatch({ type: BANNER_FETCH, payload: snapshot.val() });
		})
	}
}