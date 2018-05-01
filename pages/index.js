import React, { Component } from 'react'
import { Nav, Banner, HomeOurbrands, HomePromotion, Footer } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<Nav isActive="หน้าแรก"/>
				<Banner />
				<HomeOurbrands />
				<HomePromotion />
				<Footer />
			</div>
		)
	}
}

export default Home;