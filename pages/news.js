import React, { Component } from 'react'
import { Nav, AllBanner, NewsInfo, Footer } from './components'

import '../styles/index.scss'

class News extends Component {
	render() {
		return (
			<div>
				<Nav />
				<AllBanner source="static/images/04-promotion/banner.jpg"/>
				<NewsInfo />
				<Footer />
			</div>
		)
	}
}

export default News;