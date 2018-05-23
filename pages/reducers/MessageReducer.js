import {
	MESSAGE_CREATE,
	MESSAGE_FETCH,
	MESSAGE_SET_STATUS,
	MESSAGE_DELETE
} from '../actions/types';

const INITIAL_STATE = { 
	isCreate: false,
	messages: [],
	isStatus: false,
	isDelete: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MESSAGE_CREATE:
			return { ...state, isCreate: action.payload }
		case MESSAGE_FETCH:
			return { ...state, messages: action.payload }
		case MESSAGE_SET_STATUS:
			return { ...state, isStatus: action.payload }
		case MESSAGE_DELETE:
			return { ...state, isDelete: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}