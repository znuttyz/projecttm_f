import React, { Component } from 'react'
import { Head, Nav, AllBanner, PromotionInfo, Footer } from './components'

import '../styles/index.scss'

class Promotion extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - news" />
				<Nav />
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F04-promotion%2Fbanner.jpg?alt=media&token=3b780257-265f-46d7-ae9f-b7992b23a858"/>
				<PromotionInfo />
				<Footer />
			</div>
		)
	}
}

export default Promotion;