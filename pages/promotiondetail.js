import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, PromotionDetailElement, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	promotionFetchById
} from './actions'

import '../styles/index.scss'

class PromotionDetail extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			id: props.url.query.id,
			lang: Cookies.get('lang')
		}
	}

	componentWillMount() {
		this.props.promotionFetchById(this.state.id)
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
		let footer
		switch(this.state.lang) {
			case "en":
				console.log('en')
				break;
			case "cn":
				console.log('cn')
				break;
			default:
				footer = require('../static/language/thai.json').footer
		}

		return (
			<div>
				<Head title="Tummour Original - Promotion" />
				<Nav isActive="news" />
				{(this.props.promotions && <PromotionDetailElement promotions={this.props.promotions}/>)}
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ promotion }) => {
	return {
		promotions: promotion.promotions,
	}
}

export default withRedux(initStore, mapStateToProps, { 
	promotionFetchById
})(PromotionDetail)