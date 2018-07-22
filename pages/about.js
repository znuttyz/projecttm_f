import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, AboutInfo, Footer } from './components'

import '../styles/index.scss'

class About extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			lang: Cookies.get('lang')
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
				console.log('en')
				break;
			case "cn":
				console.log('cn')
				break;
			default:
				content = require('../static/language/thai.json').about
				footer = require('../static/language/thai.json').footer
		}

		return (
			<div>
				<Head title="Tummour Original - About"/>
				<Nav isActive="about"/>
				<AboutInfo content={content} />
				<Footer footer={footer}/>
			</div>
		)
	}
}

export default About;