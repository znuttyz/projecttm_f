import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, KruathaiElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandKruathai extends Component {

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original - Kruathai" />
				<Nav isActive="brands" />
				<KruathaiElement />
				<Footer />
			</div>
		)
	}
}

export default BrandKruathai;