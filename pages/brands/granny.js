import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, GrannyElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandGranny extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original - Granny's Chicken Rice" />
				<Nav isActive="brands" />
				<GrannyElement />
				<Footer />
			</div>
		)
	}
}

export default BrandGranny;