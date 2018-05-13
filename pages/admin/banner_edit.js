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
			// name: "",
			// tag: "",
			selectedFile1: null,
			selectedFile2: null,
			selectedFile3: null,
			loading1: null,
			loading2: null,
			loading3: null,
			disableInput: false
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
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
	    	[event.target.name]: event.target.files[0]
	    })
	};

	fileUploadHandler(file, lang, loading) {
	    const fd = new FormData()
	    fd.append('image', file, file.name)
	    axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd, {
	      onUploadProgress: progressEvent => {
	      	let progress = Math.round(progressEvent.loaded / progressEvent.total * 100)
	        console.log('Upload Progress: ' + progress + '%')
	        this.setState({ [loading]: progress })
	      }
	    })
	    .then(res => {
	    	// const { name, tag } = this.state
	    	axios.get('https://us-central1-tummour-original.cloudfunctions.net/getFile?filename='+file.name)
	    	.then(res => {
	    		this.props.bannerUpdate({ [lang]: res.data.url })
	    		this.setState({ [loading]: 100 })
	    	})
	    })
	}

	_onHandleSubmit(id) {
		this.setState({ disableInput: true })
		if(id === 1) {
			this.fileUploadHandler(this.state.selectedFile1, "src_th", "loading1")
		}
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
							<label className="formLabel">Browse Image (TH)</label>
							<input 
								name="selectedFile1"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput => this.fileInput = fileInput}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput.click()} className="formFile">Pick File</button>
							{this.state.selectedFile1 && this.state.selectedFile1.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(1)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading1 && this.state.loading1 + '%'}</div>
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
