import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, AboutInfo, Footer } from './components'


import '../styles/index.scss'

class About extends Component {

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original - About"/>
				<Nav isActive="about"/>
				<AboutInfo />
				<Footer />
			</div>
		)
	}
}

export default About;