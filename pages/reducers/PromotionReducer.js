import {
	PROMOTION_FETCH,
	PROMOTION_CREATE,
	PROMOTION_UPDATE
} from '../actions/types';

const INITIAL_STATE = { 
	promotions: null,
	isCreate: false,
	isUpdate: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PROMOTION_FETCH:
			return { ...state, promotions: action.payload }
		case PROMOTION_CREATE:
			return { ...state, isCreate: true }
		case PROMOTION_UPDATE:
			return { ...state, isUpdate: action.payload }
		default:
			return { ...state, ...INITIAL_STATE }
	}
}