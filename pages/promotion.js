import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, PromotionInfo, Footer } from './components'

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

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
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
				<PromotionInfo promotions={this.state.promotions} handleChange={event=>this._onHandleChange(event)}/>
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