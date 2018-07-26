import {
	BRAND_FETCH,
	BRAND_FETCH_REGION,
	BRAND_CREATE_REGION,
	BRAND_UPDATE
} from '../actions/types';

const INITIAL_STATE = { 
	brand: null,
	region: [],
	isCreate: false,
	isUpdate: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BRAND_FETCH:
			return { ...state, brand: action.payload }
		case BRAND_FETCH_REGION:
			return { ...state, region: action.payload }
		case BRAND_CREATE_REGION:
			return { ...state, isCreate: action.payload }
		case BRAND_UPDATE:
			return { ...state, isUpdate: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}