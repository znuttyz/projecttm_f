import React, { Component } from 'react'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { initStore, loginUserCheck, logoutUser } from '../actions'


import '../../styles/index.scss'

class News_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			subbody: "",
			body: "",
			selectedFile1: null,
			selectedFile2: null,
			selectedFile3: null,
			selectedFile4: null,
			selectedFile5: null,
			selectedFile6: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
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

					<Card title="News" subTitle="Edit News" isEdit={true}>
						<Form 
							title="News"
							handleChange={(event) => this._onHandleChange(event)} 
							handleFile={event => this.fileSelectedHandler(event)}
							file1={this.state.selectedFile1}
							file2={this.state.selectedFile2}
							file3={this.state.selectedFile3}
							file4={this.state.selectedFile4}
							file5={this.state.selectedFile5}
							file6={this.state.selectedFile6}
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
})(News_edit)
