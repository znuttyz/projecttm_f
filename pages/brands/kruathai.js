import React, { Component } from 'react'
import { Head, Nav, AllBanner, KruathaiElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandKruathai extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - kruathai" />
				<Nav />
				<KruathaiElement />
				<Footer />
			</div>
		)
	}
}

export default BrandKruathai;