import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, NewsInfo, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	newsFetch
} from './actions'

import '../styles/index.scss'

class News extends Component {

	constructor(props) {
		super(props)
		this.state = {
			news: []
		}
	}

	componentWillMount() {
		this.props.newsFetch()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.news) {
			this.setState({
				news: nextProps.news
			})
		}
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
				<NewsInfo news={this.state.news}/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ news }) => {
	return {
		news: news.news
	}
}


export default withRedux(initStore, mapStateToProps, { newsFetch })(News)