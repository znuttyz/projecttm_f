import React, { Component } from 'react'
import { Sidebar, Header, Card, Table } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	messageFetch
} from '../actions'


import '../../styles/index.scss'

class Message extends Component {

	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			user: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.messageFetch()

	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.messages) {
			this.setState({ messages: nextProps.messages })
		}
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	 showMessages() {
	 	return this.state.messages.map((data, index) => {
		let d = new Date(data.date)
		let date = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
			return (
				<tr key={data.topic}>
					<td>{date}</td>
					<td>{data.topic}</td>
					<td>{data.name}</td>
					<td>{data.email}</td>
					<td>{data.phone}</td>
					<td>{data.body}</td>
				</tr>
			)
		})
	 }

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Messages" />
				</div>

				<div className="contentAdmin">
					<Header title="Message" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="Message" subTitle="List of messages">
						
						<table className="tableAdmin">
							<thead>
								<tr>
									<th>Date</th>
									<th>Topic</th>
									<th>Name</th>
									<th>E-mail</th>
									<th>Phone</th>
									<th>Body</th>
								</tr>
							</thead>
							<tbody>
								{this.showMessages()}
							</tbody>
						</table>

					</Card>

				</div>
						
			    	
			</div>
		)
	}
}

const mapStateToProps = ({ auth, message }) => {
	return {
		user: auth.user,
		messages: message.messages
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, messageFetch
})(Message)
