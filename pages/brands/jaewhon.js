import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, JaewhonElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandJaewhon extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - Jaewhon" />
				<Nav isActive="brands" />
				<JaewhonElement />
				<Footer />
			</div>
		)
	}
}

export default BrandJaewhon;