import React, { Component } from 'react'
import { Head, Nav, AllBanner, AboutInfo, Footer } from './components'

import '../styles/index.scss'

class About extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original"/>
				<Nav isActive="about"/>
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F02-about%2Fbanner.jpg?alt=media&token=bb43a9ee-b522-4e8c-9f68-2015ebea7c52"/>
				<AboutInfo />
				<Footer />
			</div>
		)
	}
}

export default About;