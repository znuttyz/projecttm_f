import React, { Component } from 'react'
import { Head, Nav, AllBanner, JaewhonElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandJaewhon extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - jaewhon" />
				<Nav />
				<JaewhonElement />
				<Footer />
			</div>
		)
	}
}

export default BrandJaewhon;