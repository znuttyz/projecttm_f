import React, { Component } from 'react'
import { Sidebar, Header, Card, Table } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	promotionFetch,
	promotionDeleteById
} from '../actions'


import '../../styles/index.scss'

class Promotion extends Component {

	constructor(props) {
		super(props)
		this.state = {
			promotions: [],
			user: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.promotionFetch()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.promotions) {
			this.setState({ promotions: nextProps.promotions })
		}
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
	}

	_handleDelete(id) {
		let promise = new Promise((resolve, reject) => {
		  	this.props.promotionDeleteById(id)
		  	resolve()
		})
		promise.then(() => {
			this.props.promotionFetch()
		})
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Promotions" />
				</div>

				<div className="contentAdmin">
					<Header title="Promotions" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="Promotions" subTitle="All Promotions">
						
						<Table title="Promotion" promotions={this.state.promotions} handleDelete={(id) => this._handleDelete(id)}/>

					</Card>
					
				</div>
						
			    	
			</div>
		)
	}
}

const mapStateToProps = ({ auth, promotion }) => {
	return {
		user: auth.user,
		promotions: promotion.promotions
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, promotionFetch, promotionDeleteById
})(Promotion)
