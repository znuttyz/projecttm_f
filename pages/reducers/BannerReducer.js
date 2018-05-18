import {
	BANNER_FETCH,
	BANNER_UPDATE,
	BANNER_FETCH_HOME
} from '../actions/types';

const INITIAL_STATE = { 
	banner: null,
	isUpdate: false,
	home: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BANNER_FETCH:
			return { ...state, banner: action.payload }
		case BANNER_UPDATE:
			return { ...state, isUpdate: action.payload }
		case BANNER_FETCH_HOME: 
			return { ...state, home: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}