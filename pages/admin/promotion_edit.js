import React, { Component } from 'react'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { initStore, loginUserCheck, logoutUser } from '../actions'


import '../../styles/index.scss'

class Promotion_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			subbody: "",
			body: "",
			selectedFile1: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	fileSelectedHandler(event) {
		console.log(event.target.name)
	    this.setState({ 
	    	[event.target.name]: event.target.files[0]
	    })
	};

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Promotions" />
				</div>

				<div className="contentAdmin">
					<Header title="Promotions" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title="Promotion" subTitle="Edit Promotion" isEdit={true}>
						<Form 
							title="Promotion"
							handleChange={(event) => this._onHandleChange(event)} 
							handleFile={event => this.fileSelectedHandler(event)}
							file1={this.state.selectedFile1}
						/>
						
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
})(Promotion_edit)
