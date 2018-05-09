import React, { Component } from 'react'
import { Sidebar, Header, Card, Table } from './components'

import withRedux from 'next-redux-wrapper'
import { initStore, loginUserCheck, logoutUser } from '../actions'


import '../../styles/index.scss'

class News extends Component {

	componentWillMount() {
		this.props.loginUserCheck()
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="News" subTitle="List of News">
						
						<Table />

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
})(News)
