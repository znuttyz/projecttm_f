import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, NewsInfo, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	newsFetch
} from './actions'

import '../styles/index.scss'

class News extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			news: [],
			lang: Cookies.get('lang')
		}
	}

	componentWillMount() {
		this.props.newsFetch()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.news) {
			this.setState({
				news: nextProps.news
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

	render() {
		let content, footer
		switch(this.state.lang) {
			case "en":
				content = require('../static/language/en.json').news
				footer = require('../static/language/en.json').footer
				break;
			case "cn":
				content = require('../static/language/cn.json').news
				footer = require('../static/language/cn.json').footer
				break;
			default:
				content = require('../static/language/th.json').news
				footer = require('../static/language/th.json').footer
		}

		return (
			<div>
				<Head title="Tummour Original - News" />
				<Nav isActive="news" handleLang={(lang)=>this._handleLang(lang)}/>
				<NewsInfo news={this.state.news} content={content} />
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ news }) => {
	return {
		news: news.news
	}
}


export default withRedux(initStore, mapStateToProps, { newsFetch })(News)