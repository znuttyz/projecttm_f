import React, { Component } from 'react'
import { Head, Nav, HomeBanner, HomeOurbrands, HomePromotion, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	bannerFetch
} from './actions'

import '../styles/index.scss'

class Home extends Component {

	componentWillMount() {
		this.props.bannerFetch()
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original"/>
				<Nav isActive="home"/>
				{(this.props.banner && <HomeBanner image={this.props.banner}/>)}
				<HomeOurbrands />
				<HomePromotion />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ banner }) => {
	return {
		banner: banner.banner
	}
}


export default withRedux(initStore, mapStateToProps, { bannerFetch })(Home)