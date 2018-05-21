import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, TummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandTummour extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - Tummour" />
				<Nav isActive="brands" />
				<TummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandTummour;