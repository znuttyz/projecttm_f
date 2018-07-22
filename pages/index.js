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
			lang: Cookies.get('lang')
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
		let content
		switch(this.state.lang) {
			case "en":
				console.log('en')
				break;
			case "cn":
				console.log('cn')
				break;
			default:
				content = require('../static/language/thai.json').home
		}

		return (
			<div>
				<Head title="Tummour Original"/>
				<Nav isActive="home"/>
				{(this.props.home[0] && <HomeBanner image={this.props.home[0]} content={content.banner}/>)}
				<HomeOurbrands content={content.brand} />
				{(this.props.home[1] && <HomePromotion promotions={this.props.home[1]} content={content.promotion} />)}
				<Footer />
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