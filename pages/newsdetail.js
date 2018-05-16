import React, { Component } from 'react'
import { Head, Nav, AllBanner, NewsDetailElement, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	newsFetchById
} from './actions'

import '../styles/index.scss'

class NewsDetail extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
		}
	}

	componentWillMount() {
		this.props.newsFetchById(this.state.id)
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original - News" />
				<Nav isActive="news" />
				<NewsDetailElement news={(this.props.news && this.props.news)}/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ news }) => {
	return {
		news: news.news,
	}
}

export default withRedux(initStore, mapStateToProps, { 
	newsFetchById
})(NewsDetail)