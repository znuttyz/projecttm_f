import React, { Component } from 'react'
import { Head, Nav, AllBanner, GrannyElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandGranny extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - granny's chicken rice" />
				<Nav isActive="brands" />
				<GrannyElement />
				<Footer />
			</div>
		)
	}
}

export default BrandGranny;