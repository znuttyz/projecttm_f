import {
	NEWS_FETCH,
	NEWS_CREATE,
	NEWS_UPDATE,
	NEWS_DELETE,
	NEWS_FETCH_IMAGE,
	NEWS_CREATE_IMAGE,
	NEWS_DELETE_IMAGE
} from '../actions/types';

const INITIAL_STATE = { 
	news: [],
	images: [],
	isCreate: false,
	isUpdate: false,
	isDelete: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEWS_FETCH:
			return { ...state, news: action.payload }
		case NEWS_CREATE:
			return { ...state, isCreate: action.payload }
		case NEWS_UPDATE:
			return { ...state, isUpdate: action.payload }
		case NEWS_FETCH_IMAGE:
			return { ...state,  images: action.payload }
		case NEWS_CREATE_IMAGE:
			return { ...state, ...INITIAL_STATE }
		case NEWS_DELETE_IMAGE:
			return { ...state, isDelete: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}