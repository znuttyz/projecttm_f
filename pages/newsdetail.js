import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, NewsDetailElement, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	newsFetchById,
	newsFetchImageById
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
		this.props.newsFetchImageById(this.state.id)
	}

	componentDidMount() {
		ReactGA.initialize('UA-119527300-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original - News" />
				<Nav isActive="news" />
				<NewsDetailElement news={(this.props.news && this.props.news)} images={(this.props.images && this.props.images)}/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ news }) => {
	return {
		news: news.news,
		images: news.images
	}
}

export default withRedux(initStore, mapStateToProps, { 
	newsFetchById, newsFetchImageById
})(NewsDetail)