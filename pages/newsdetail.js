import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, NewsDetailElement, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	newsFetchById,
	newsFetchImageById
} from './actions'

import '../styles/index.scss'

class NewsDetail extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			id: props.url.query.id,
			lang: Cookies.get('lang')
		}
	}

	componentWillMount() {
		this.props.newsFetchById(this.state.id)
		this.props.newsFetchImageById(this.state.id)
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
				<Head title="Tummour Original - News" />
				<Nav isActive="news" />
				<NewsDetailElement news={(this.props.news && this.props.news)} images={(this.props.images && this.props.images)}/>
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ news }) => {
	return {
		news: news.news,
		images: news.images
	}
}

export default withRedux(initStore, mapStateToProps, { 
	newsFetchById, newsFetchImageById
})(NewsDetail)