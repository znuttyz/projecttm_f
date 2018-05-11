import {
	NEWS_FETCH,
} from '../actions/types';

const INITIAL_STATE = { 
	news: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEWS_FETCH:
			return { ...state }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}