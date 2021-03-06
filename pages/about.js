import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, AboutInfo, Footer, Analytics } from './components'

import '../styles/index.scss'

class About extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			lang: Cookies.get('lang')
		}
	}

	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}

	render() {
		let content, footer
		switch(this.state.lang) {
			case "en":
				content = require('../static/language/en.json').about
				footer = require('../static/language/en.json').footer
				break;
			case "cn":
				content = require('../static/language/cn.json').about
				footer = require('../static/language/cn.json').footer
				break;
			default:
				content = require('../static/language/th.json').about
				footer = require('../static/language/th.json').footer
		}

		if(!this.state.lang) return <div></div>
		return (
			<div>
				<Head title="Tummour Original - About"/>
				<Analytics />
				<Nav isActive="about" handleLang={(lang)=>this._handleLang(lang)} navbar={content.navbar} navbarmb={content.navbarmb} />
				<AboutInfo content={content} />
				<Footer footer={footer}/>
			</div>
		)
	}
}

export default About;