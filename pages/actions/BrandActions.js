import * as firebase from 'firebase';
import {
	BRAND_FETCH,
	BRAND_FETCH_REGION,
	BRAND_CREATE_REGION,
	BRAND_UPDATE
} from './types';

export const brandFetch = (brand) => {
	return(dispatch) => {
		let	brandRef = firebase.database().ref('brand/'+brand)
		brandRef.once('value', function(snapshot) {
			dispatch({ type: BRAND_FETCH, payload: snapshot.val() })
		})
	}
}

export const brandUpdate = (brand, postData) => {
	return(dispatch) => {
		firebase.database().ref('brand/'+brand).update(postData)
		.then(res => dispatch({ type: BRAND_UPDATE, payload: true }))
	}
}

const brandfetchregion = (brand, region, dispatch) => {
	let	brandRef = firebase.database().ref('brand/'+brand+'/region/'+region)
	brandRef.once('value', function(snapshot) {
		let data = []
		snapshot.forEach(childSnapshot => {
			let item = childSnapshot.val()
			data.push(item)
		})
		dispatch({ type: BRAND_FETCH_REGION, payload: data.reverse() });
	})
}

export const brandFetchRegion = (brand, region) => {
	return(dispatch) => {
		brandfetchregion(brand, region, dispatch)
	}
}

export const brandCreateRegion = (brand, region, postData) => {
	return(dispatch) => {
		const brandRef = firebase.database().ref('brand/'+brand+"/region/"+region).push()
		const id = brandRef.key
		postData.id = id
		brandRef.set(postData)
		.then(res => { 
			dispatch({ type: BRAND_CREATE_REGION, payload: true })
			brandfetchregion(brand, region, dispatch) 
		})
	}
}

export const brandDeleteRegion = (brand, region, id) => {
	return(dispatch) => {
		firebase.database().ref('brand/'+brand+"/region/"+region+"/"+id).remove()
		.then(()=>brandfetchregion(brand, region, dispatch))
	}
}