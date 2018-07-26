import * as firebase from 'firebase';
import {
	BRAND_FETCH
} from './types';

export const brandFetch = (brand) => {
	return(dispatch) => {
		let	brandRef = firebase.database().ref('brand/'+brand)
		brandRef.once('value', function(snapshot) {
			dispatch({ type: BRAND_FETCH, payload: snapshot.val() })
		})
	}
}