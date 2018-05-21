import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, DetummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandDetummour extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
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