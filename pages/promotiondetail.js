import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, PromotionDetailElement, Footer, Analytics } from './components'

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

	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}

	render() {
		let content, footer
		switch(this.state.lang) {
			case "en":
				content = require('../static/language/en.json').promotion
				footer = require('../static/language/en.json').footer
				break;
			case "cn":
				content = require('../static/language/cn.json').promotion
				footer = require('../static/language/cn.json').footer
				break;
			default:
				content = require('../static/language/th.json').promotion
				footer = require('../static/language/th.json').footer
		}

		if(!this.state.lang) return <div></div>
		return (
			<div>
				<Head title="Tummour Original - Promotion" />
				<Analytics />
				<Nav isActive="news" handleLang={(lang)=>this._handleLang(lang)} navbar={content.navbar} navbarmb={content.navbarmb} />
				{(this.props.promotions && <PromotionDetailElement promotions={this.props.promotions} content={content} lang={this.state.lang} />)}
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