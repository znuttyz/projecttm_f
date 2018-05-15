import React, { Component } from 'react'
import { Head, Nav, AllBanner, PromotionInfo, Footer } from './components'

import '../styles/index.scss'

class Promotion extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - promotion" />
				<Nav />
				<PromotionInfo />
				<Footer />
			</div>
		)
	}
}

export default Promotion;