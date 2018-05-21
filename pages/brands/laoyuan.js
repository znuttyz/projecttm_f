import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, LaoyuanElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandLaoyuan extends Component {

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - Laoyuan" />
				<Nav isActive="brands" />
				<LaoyuanElement />
				<Footer />
			</div>
		)
	}
}

export default BrandLaoyuan;