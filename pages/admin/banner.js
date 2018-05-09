import React, { Component } from 'react'
import { Sidebar, Card, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { initStore, loginUserCheck, logoutUser } from '../actions'


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
								{(this.state.imageStatus === "loading") ? <div>Loading...</div>: ""}
								<img 
									src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F01-home%2Fbanner.jpg?alt=media&token=c15713cb-1ed0-4c9a-8822-db4f7eb231b3" 
									width="100%"
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

const mapStateToProps = ({ auth }) => {
	return {
		user: auth.user
	}
}


export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser 
})(Banner)
