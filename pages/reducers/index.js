import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BannerReducer from './BannerReducer'
import NewsReducer from './NewsReducer'

export default combineReducers({
	auth: AuthReducer,
	banner: BannerReducer,
	news: NewsReducer
});