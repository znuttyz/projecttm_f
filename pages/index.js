import React, { Component } from 'react'
import { Nav, HomeBanner, HomeOurbrands, HomePromotion, Footer } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<Nav isActive="หน้าแรก"/>
				<HomeBanner />
				<HomeOurbrands />
				<HomePromotion />
				<Footer />
			</div>
		)
	}
}

export default Home;