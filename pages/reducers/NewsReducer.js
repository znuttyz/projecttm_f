import {
	NEWS_FETCH,
	NEWS_CREATE
} from '../actions/types';

const INITIAL_STATE = { 
	news: [],
	isCreate: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEWS_FETCH:
			return { ...state, news: action.payload }
		case NEWS_CREATE:
			return { ...state, isCreate: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}