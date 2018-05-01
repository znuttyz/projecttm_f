import React, { Component } from 'react'
import { Nav, AllBanner, News, Footer } from './components'

import '../styles/index.scss'

class Promotion extends Component {
	render() {
		return (
			<div>
				<Nav isActive="หน้าแรก"/>
				<AllBanner source="static/images/04-promotion/banner.jpg"/>
				<News />
				<Footer />
			</div>
		)
	}
}

export default Promotion;