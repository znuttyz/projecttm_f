import React, { Component } from 'react'
import { Head, Nav, AllBanner, NewsInfo, Footer } from './components'

import '../styles/index.scss'

class News extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - news" />
				<Nav />
				<NewsInfo />
				<Footer />
			</div>
		)
	}
}

export default News;