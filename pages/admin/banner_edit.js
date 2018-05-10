import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser, 
	bannerUpdate 
} from '../actions'


import '../../styles/index.scss'

class Banner_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			tag: "",
			selectedFile: null,
			disableInput: false,
			loading: null
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.isUpdate) {
			window.location = '/admin/banner'
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	fileSelectedHandler = event => {
	    this.setState({ 
	    	selectedFile: event.target.files[0]
	    })
	};

	fileUploadHandler() {
	    const fd = new FormData()
	    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
	    axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd, {
	      onUploadProgress: progressEvent => {
	      	let progress = Math.round(progressEvent.loaded / progressEvent.total * 100)
	        console.log('Upload Progress: ' + progress + '%')
	        this.setState({ loading: progress })
	      }
	    })
	    .then(res => {
	    	const { name, tag } = this.state
	    	const src = 'https://storage.cloud.google.com/tummour-original.appspot.com/upload/'+this.state.selectedFile.name
	    	this.props.bannerUpdate(name, src, tag)
	    	this.setState({ loading: 100 })
	    })
	}

	_onHandleSubmit() {
		console.log("submit")
		this.setState({ disableInput: true })
		this.fileUploadHandler()
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

					<Card title="Banners" subTitle="Edit Banners" isEdit={true}>

						<div className="formContainer">
							<label className="formLabel">Name</label>
							<input type="text" className="formControl" name="name" onChange={(event) => this._onHandleChange(event)} value={this.state.name} disabled={this.state.disableInput} />
						</div>

						<div className="formContainer">
							<label className="formLabel">Tag</label>
							<input type="text" className="formControl" name="tag" onChange={(event) => this._onHandleChange(event)} value={this.state.tag} disabled={this.state.disableInput} />
						</div>

						<div className="formContainer">
							<label className="formLabel">Browse Image</label>
							<input 
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput => this.fileInput = fileInput}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput.click()} className="formFile">Pick File</button>
							{this.state.selectedFile && this.state.selectedFile.name}
							<div className="fileLoader">{this.state.loading && this.state.loading + '%'}</div>
						</div>

						<div className="formContainer">
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit()}>SUBMIT</button>
						</div>
					</Card>	

				</div>
			    	
			</div>
		)
	}
}

const mapStateToProps = ({ auth, banner }) => {
	return {
		user: auth.user,
		isUpdate: banner.isUpdate
	}
}


export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, bannerUpdate
})(Banner_edit)
