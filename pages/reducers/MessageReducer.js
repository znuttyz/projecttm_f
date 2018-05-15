import {
	MESSAGE_CREATE,
	MESSAGE_FETCH
} from '../actions/types';

const INITIAL_STATE = { 
	isCreate: false,
	messages: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MESSAGE_CREATE:
			return { ...state, isCreate: action.payload }
		case MESSAGE_FETCH:
			return { ...state, messages: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}