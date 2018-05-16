import React, { Component } from 'react'
import { Head, Nav, AllBanner, AboutInfo, Footer } from './components'

import '../styles/index.scss'

class About extends Component {
	render() {
		return (
			<div>
				<Head title="Tummour Original - About"/>
				<Nav isActive="about"/>
				<AboutInfo />
				<Footer />
			</div>
		)
	}
}

export default About;