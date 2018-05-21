import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, HomeBanner, HomeOurbrands, HomePromotion, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	bannerFetchHome,
} from './actions'

import '../styles/index.scss'

class Home extends Component {

	componentWillMount() {
		this.props.bannerFetchHome()
	}

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original"/>
				<Nav isActive="home"/>
				{(this.props.home[0] && <HomeBanner image={this.props.home[0]}/>)}
				<HomeOurbrands />
				{(this.props.home[1] && <HomePromotion promotions={this.props.home[1]} />)}
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ banner }) => {
	return {
		home: banner.home
	}
}


export default withRedux(initStore, mapStateToProps, { bannerFetchHome })(Home)