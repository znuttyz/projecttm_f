import React, { Component } from 'react'
import { Card } from './components'
import Router from 'next/router'

import withRedux from 'next-redux-wrapper'
import { initStore, loginUser, loginUserCheck } from '../actions'

import '../../styles/index.scss'

class Login extends Component {

	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
		}
	}

	componentWillMount() {
		this.props.loginUserCheck("login")
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onLogin() {
		const { username, password } = this.state;
		this.props.loginUser(username, password); 
	}

	render() {
		if(this.props.user) Router.push('/admin/banner')

		return (
			<div className="loginContainer">
				<div className="login">
					<div className="title"> 
						<h1>TUMMOUR</h1>
					</div>
					<div className="content">
						<div className="formContainer">
							<input type="text" className="formControl" name="username" onChange={(event) => this._onHandleChange(event)} style={{width: '83%'}} placeholder="username" />
						</div>
						<div className="formContainer">
							<input type="password" className="formControl" name="password" onChange={(event) => this._onHandleChange(event)} style={{width: '83%'}} placeholder="password" />
						</div>
						<div className="formContainer" style={{textAlign: 'center'}}>
							
							<p style={{color: 'red'}}>{this.props.errorLogin}</p>
							{
								(this.props.loading) ?
								'Loading...'
								: <button className="loginButton" onClick={() => this._onLogin()}>LOGIN</button>
							}
						</div>
					</div>
				</div>

			</div>
		)
	}
}

const mapStateToProps = ({auth}) => {
	const { loading, errorLogin, user } = auth;
	return {
		loading, errorLogin, user
	};
}

export default withRedux(initStore, mapStateToProps, { loginUser, loginUserCheck })(Login)
