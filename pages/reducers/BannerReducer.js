import {
	BANNER_FETCH,
	BANNER_UPDATE
} from './types';

const INITIAL_STATE = { 
	banner: null
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BANNER_FETCH:
			return { ...state, banner: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}