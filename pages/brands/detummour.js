import React, { Component } from 'react'
import { Head, Nav, AllBanner, DetummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandDetummour extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - de tummour" />
				<Nav isActive="brands"/>
				<DetummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandDetummour;