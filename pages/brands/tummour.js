import React, { Component } from 'react'
import { Head, Nav, AllBanner, TummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandTummour extends Component {
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