import React, { Component } from 'react'
import { Sidebar, Card, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	bannerFetch
} from '../actions'


import '../../styles/index.scss'

class Banner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imageStatus: 'loading'
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.bannerFetch()
	}

	_handleImageLoaded() {
	    this.setState({ imageStatus: "loaded" })
	 }

	 _handleLogout() {
	 	this.props.logoutUser()
	 }

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Banners" />
				</div>

				<div className="contentAdmin">
					<Header title="Banners" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()}/>

					<Card title="Banners" subTitle="Home page banner">
						<div className="bannerContainer">
							<div className="bannerImage" >
								<h1>TH - Desktop</h1>
								{(this.state.imageStatus === "loading") ? <div>Loading...</div>: ""}
								<img 
									src={(this.props.banner && this.props.banner.src_desktop_th)} 
									alt={(this.props.banner && this.props.banner.tag)}
									onLoad={() => this._handleImageLoaded()}
								/>
							</div>
							<div className="bannerImage" >
								<h1>TH - Mobile</h1>
								{(this.state.imageStatus === "loading") ? <div>Loading...</div>: ""}
								<img 
									src={(this.props.banner && this.props.banner.src_mobile_th)} 
									alt={(this.props.banner && this.props.banner.tag)}
									onLoad={() => this._handleImageLoaded()}
								/>
							</div>
						</div>
					</Card>	

				</div>
			    	
			</div>
		)
	}
}

const mapStateToProps = ({ auth, banner }) => {
	const { user } = auth
	return {
		user,
		banner: banner.banner
	}
}


export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, bannerFetch
})(Banner)
