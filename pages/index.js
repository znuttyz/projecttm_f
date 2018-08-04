import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, HomeBanner, HomeOurbrands, HomePromotion, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	bannerFetchHome,
} from './actions'

import '../styles/index.scss'

class Home extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			lang: Cookies.get('lang'),
			content: null,
			footer: null
		}
	}

	componentWillMount() {
		this.props.bannerFetchHome()
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
				<Nav isActive="home" handleLang={(lang)=>this._handleLang(lang)}/>
				{(this.props.home[0] && <HomeBanner image={this.props.home[0]} content={content.banner}/>)}
				<HomeOurbrands content={content.brand} />
				{(this.props.home[1] && <HomePromotion promotions={this.props.home[1]} content={content.promotion} lang={this.state.lang} />)}
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ banner }) => {
	return {
		home: banner.home
	}
}


export default withRedux(initStore, mapStateToProps, { bannerFetchHome })(Home)