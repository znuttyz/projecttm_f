import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BannerReducer from './BannerReducer'
import BrandReducer from './BrandReducer'
import NewsReducer from './NewsReducer'
import PromotionReducer from './PromotionReducer'
import MessageReducer from './MessageReducer'

export default combineReducers({
	auth: AuthReducer,
	banner: BannerReducer,
	brand: BrandReducer,
	news: NewsReducer,
	promotion: PromotionReducer,
	message: MessageReducer
});