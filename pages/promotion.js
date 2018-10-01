import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, PromotionInfo, Footer, Analytics } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	promotionFetch,
	promotionFetchByBrand
} from './actions'

import '../styles/index.scss'

class Promotion extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			promotions: [],
			filter: "all",
			lang: Cookies.get('lang')
		}
	}

	componentWillMount() {
		this.props.promotionFetch()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.promotions) {
			this.setState({
				promotions: nextProps.promotions
			})
		}
	}
	
	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    })
	    if(event.target.value === "All") {
	    	this.props.promotionFetch()
	    } else {
	    	this.props.promotionFetchByBrand(event.target.value)
	    }
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
				<PromotionInfo promotions={this.state.promotions} handleChange={event=>this._onHandleChange(event)} content={content} lang={this.state.lang}/>
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ promotion }) => {
	return {
		promotions: promotion.promotions
	}
}

export default withRedux(initStore, mapStateToProps, { promotionFetch, promotionFetchByBrand })(Promotion)