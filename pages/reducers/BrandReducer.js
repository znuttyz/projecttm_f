import {
	BRAND_FETCH,
} from '../actions/types';

const INITIAL_STATE = { 
	brand: null,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BRAND_FETCH:
			return { ...state, brand: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}