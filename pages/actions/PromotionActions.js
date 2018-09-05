import * as firebase from 'firebase';
import {
	PROMOTION_FETCH,
	PROMOTION_CREATE,
	PROMOTION_DELETE,
	PROMOTION_UPDATE
} from './types';

export const promotionFetch = () => {
	return (dispatch) => {
		let	promotionRef = firebase.database().ref('promotion')
		promotionRef.once('value', function(snapshot) {
			let data = []
			snapshot.forEach(childSnapshot => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: PROMOTION_FETCH, payload: data.reverse() });
		})
	}
}

export const promotionFetchById = (id) => {
	return (dispatch) => {
		let	promotionRef = firebase.database().ref('promotion/'+id)
		promotionRef.once('value', function(snapshot) {
			dispatch({ type: PROMOTION_FETCH, payload: snapshot.val() })
		})
	}
}

export const promotionFetchByBrand = (brand) => {
	return (dispatch) => {
		let	promotionRef = firebase.database().ref('promotion').orderByChild("brand").equalTo(brand)
		promotionRef.once('value', function(snapshot) {
			let data = []
			snapshot.forEach(childSnapshot => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: PROMOTION_FETCH, payload: data.reverse() })
		})
	}
}

export const promotionFetchWithLimit = (limit) => {
	return (dispatch) => {
		let	promotionRef = firebase.database().ref('promotion').limitToLast(limit);
		promotionRef.once('value', function(snapshot) {
			let data = []
			snapshot.forEach(childSnapshot => {
				let item = childSnapshot.val()
				data.push(item)
			})
			dispatch({ type: PROMOTION_FETCH, payload: data.reverse() });
		})
	}
}


export const promotionCreate = (postData) => {
	return (dispatch) => {
		const promotionRef = firebase.database().ref('promotion').push()
		const id = promotionRef.key
		postData.id = id
		promotionRef.set(postData)
		.then(() => {
			dispatch({ type: PROMOTION_CREATE, payload: true });
		});
	}
}

export const promotionDeleteById = (id) => {
	return (dispatch) => {
		firebase.database().ref('promotion/'+id).remove()
	}
}

export const promotionUpdate = (id, postData) => {
	return (dispatch) => {
		firebase.database().ref('promotion/'+id).update(postData)
		.then(res => dispatch({ type: PROMOTION_UPDATE, payload: true }))
	}
}