import React, { Component } from 'react'
import { Sidebar, Header, Card, Table } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
} from '../actions'


import '../../styles/index.scss'

class Brand extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Brands" />
				</div>

				<div className="contentAdmin">
					<Header title="Brands" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="Brands" subTitle="List of Brands">
						
						<p>Temp</p>

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
})(Brand)