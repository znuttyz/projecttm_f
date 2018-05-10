import {
	BANNER_FETCH,
	BANNER_UPDATE
} from '../actions/types';

const INITIAL_STATE = { 
	banner: null,
	isUpdate: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BANNER_FETCH:
			return { ...state, banner: action.payload }
		case BANNER_UPDATE:
			return { ...state, isUpdate: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}