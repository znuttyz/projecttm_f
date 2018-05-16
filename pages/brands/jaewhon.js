import React, { Component } from 'react'
import { Head, Nav, AllBanner, JaewhonElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandJaewhon extends Component {
	render() {
		return (
			<div>
				<Head title="Tummour Original - Jaewhon" />
				<Nav isActive="brands" />
				<JaewhonElement />
				<Footer />
			</div>
		)
	}
}

export default BrandJaewhon;