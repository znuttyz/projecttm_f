import React, { Component } from 'react'
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