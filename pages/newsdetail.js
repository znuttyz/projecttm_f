import React, { Component } from 'react'
import { Head, Nav, AllBanner, NewsDetailElement, Footer } from './components'

import '../styles/index.scss'

class NewsDetail extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - news" />
				<Nav />
				<NewsDetailElement />
				<Footer />
			</div>
		)
	}
}

export default NewsDetail;