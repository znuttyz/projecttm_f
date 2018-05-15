import React, { Component } from 'react'
import { Head, Nav, AllBanner, PhoElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandPho extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - pho" />
				<Nav />
				<PhoElement />
				<Footer />
			</div>
		)
	}
}

export default BrandPho;