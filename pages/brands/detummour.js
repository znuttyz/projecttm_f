import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, DetummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandDetummour extends Component {

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - De Tummour" />
				<Nav isActive="brands"/>
				<DetummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandDetummour;