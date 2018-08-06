import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, HomeBanner, HomeOurbrands, HomePromotion, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	bannerFetch,
	promotionFetchWithLimit
} from './actions'

import '../styles/index.scss'

class Home extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			lang: Cookies.get('lang'),
			content: null,
			footer: null,
			banner: null,
			promotions: null
		}
	}

	componentWillMount() {
		this.props.bannerFetch()
		this.props.promotionFetchWithLimit(4)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.banner) this.setState({ banner: nextProps.banner })
		if(nextProps.promotions) this.setState({ promotions: nextProps.promotions })
	}

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}

	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}

	render() {
		let content, footer
		switch(this.state.lang) {
			case "en":
				content = require('../static/language/en.json').home
				footer = require('../static/language/en.json').footer
				break;
			case "cn":
				content = require('../static/language/cn.json').home
				footer = require('../static/language/cn.json').footer
				break;
			default:
				content = require('../static/language/th.json').home
				footer = require('../static/language/th.json').footer
		}

		if(!this.state.lang) return <div></div>
		return (
			<div>
				<Head title="Tummour Original"/>
				<Nav isActive="home" handleLang={(lang)=>this._handleLang(lang)} navbar={content.navbar} navbarmb={content.navbarmb} />
				{(this.state.banner && <HomeBanner image={this.state.banner} content={content.banner}/>)}
				<HomeOurbrands content={content.brand} />
				{(this.state.promotions && <HomePromotion promotions={this.state.promotions} content={content.promotion} lang={this.state.lang} />)}
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ banner, promotion }) => {
	return {
		banner: banner.banner,
		promotions: promotion.promotions
	}
}


export default withRedux(initStore, mapStateToProps, { promotionFetchWithLimit, bannerFetch })(Home)
