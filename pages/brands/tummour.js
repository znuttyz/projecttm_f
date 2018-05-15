import React, { Component } from 'react'
import { Head, Nav, AllBanner, TummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandTummour extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - tummour" />
				<Nav />
				<TummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandTummour;