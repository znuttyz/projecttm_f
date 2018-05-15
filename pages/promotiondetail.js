import React, { Component } from 'react'
import { Head, Nav, AllBanner, PromotionDetailElement, Footer } from './components'

import '../styles/index.scss'

class PromotionDetail extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - news" />
				<Nav isActive="news" />
				<PromotionDetailElement />
				<Footer />
			</div>
		)
	}
}

export default PromotionDetail;