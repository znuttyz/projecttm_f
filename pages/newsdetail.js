import React, { Component } from 'react'
import { Head, Nav, AllBanner, NewsDetailElement, Footer } from './components'

import '../styles/index.scss'

class NewsDetail extends Component {
	render() {
		return (
			<div>
				<Head title="Tummour Original - News" />
				<Nav isActive="news" />
				<NewsDetailElement />
				<Footer />
			</div>
		)
	}
}

export default NewsDetail;