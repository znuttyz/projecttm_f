import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BannerReducer from './BannerReducer'
import NewsReducer from './NewsReducer'
import PromotionReducer from './PromotionReducer'

export default combineReducers({
	auth: AuthReducer,
	banner: BannerReducer,
	news: NewsReducer,
	promotion: PromotionReducer
});