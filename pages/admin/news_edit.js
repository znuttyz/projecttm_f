import React, { Component } from 'react'
import axios from 'axios'
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
			// selectedFile1: null,
			// selectedFile2: null,
			// selectedFile3: null,
			// selectedFile4: null,
			// selectedFile5: null,
			// selectedFile6: null
			selectedFile: [],
			loading: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	fileSelectedHandler(event) {
		// console.log(event.target.name)
	 //    this.setState({ 
	 //    	[event.target.name]: event.target.files[0]
	 //    })
		let tmp = this.state.selectedFile
		tmp.push(event.target.files[0])
		this.setState({ selectedFile: tmp })
		console.log(this.state.selectedFile)
	};

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	//  fileUploadHandler() {
	//     const fd = new FormData()
	//     let promises = []
	//     this.state.selectedFile.map((file, index) => {
	//     	console.log(index, file)
	//     	fd.append('image', file, file.name)
	//     	promises.push(axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd))
	//     })
	//     axios.all(promises)
	// 		.then(axios.spread(function (acct, perms) {
	// 	    	console.log('acct',acct)
	// 	    	console.log('perms',perms)
	// 		})
	// 	);

	//     // axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd)
	// 	   //  .then(res => {
	// 	   //  	const { name, tag } = this.state
	// 	   //  	const src = 'https://storage.cloud.google.com/tummour-original.appspot.com/upload/'+file.name
	// 	   //  	let loading = Math.round(100/(6-index))
	// 	   //  	this.setState({ loading })
	// 	   //  })
	// }

	 _onHandleSubmit() {
	 	// this.fileUploadHandler()
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
							file1={this.state.selectedFile[0]}
							file2={this.state.selectedFile[1]}
							file3={this.state.selectedFile[2]}
							file4={this.state.selectedFile[3]}
							file5={this.state.selectedFile[4]}
							file6={this.state.selectedFile[5]}
						/>
						<div className="formContainer">
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit()}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading && this.state.loading + '%'}</div>
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
})(News_edit)
