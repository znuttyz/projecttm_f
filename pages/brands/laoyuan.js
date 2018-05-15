import React, { Component } from 'react'
import { Head, Nav, AllBanner, LaoyuanElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandLaoyuan extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - laoyuan" />
				<Nav isActive="brands" />
				<LaoyuanElement />
				<Footer />
			</div>
		)
	}
}

export default BrandLaoyuan;