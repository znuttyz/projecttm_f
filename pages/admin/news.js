import React, { Component } from 'react'
import { Sidebar, Header, Card, Table } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	newsFetch,
	newsDeleteById
} from '../actions'


import '../../styles/index.scss'

class News extends Component {

	constructor(props) {
		super(props)
		this.state = {
			news: [],
			user: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.newsFetch()

	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.news) {
			this.setState({ news: nextProps.news })
		}
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
	}

	_handleDelete(id) {
		let promise = new Promise((resolve, reject) => {
		  	this.props.newsDeleteById(id)
		  	resolve()
		})
		promise.then(() => {
			this.props.newsFetch()
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
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="News" subTitle="List of News">
						
						<Table title="News" news={this.state.news} handleDelete={(id) => this._handleDelete(id)}/>

					</Card>

				</div>
						
			    	
			</div>
		)
	}
}

const mapStateToProps = ({ auth, news }) => {
	return {
		user: auth.user,
		news: news.news
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, newsFetch, newsDeleteById
})(News)
