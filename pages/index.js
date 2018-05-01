import React, { Component } from 'react'
import { Nav, Banner, Ourbrands } from './components'

import '../styles/index.scss'

class Home extends Component {
	render() {
		return (
			<div>
				<Nav isActive="หน้าแรก"/>
				<Banner />
				<Ourbrands />
			</div>
		)
	}
}

export default Home;