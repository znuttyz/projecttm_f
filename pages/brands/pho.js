import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, PhoElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandPho extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - Pho" />
				<Nav isActive="brands" />
				<PhoElement />
				<Footer />
			</div>
		)
	}
}

export default BrandPho;