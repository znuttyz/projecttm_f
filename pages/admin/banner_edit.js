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
			selectedFile4: null,
			selectedFile5: null,
			selectedFile6: null,
			loading1: null,
			loading2: null,
			loading3: null,
			loading4: null,
			loading5: null,
			loading6: null,
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
	    	// axios.get('https://us-central1-tummour-original.cloudfunctions.net/getFile?filename='+file.name)
	    	// .then(res => {
    		let src = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+file.name+'?alt=media'
    		this.props.bannerUpdate({ [lang]: src })
    		this.setState({ [loading]: 100 })
	    	// })
	    })
	}

	_onHandleSubmit(id) {
		if(id === 1) {
			this.fileUploadHandler(this.state.selectedFile1, "src_desktop_th", "loading1")
		} else if (id === 2) {
			this.fileUploadHandler(this.state.selectedFile2, "src_mobile_th", "loading2")
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
							<label className="formLabel">Browse Image (TH - Desktop)</label>
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
							<div className="fileLoader">{this.state.loading1 && 'Progress: '+this.state.loading1 + '%'}</div>
						</div>

						<div className="formContainer">
							<label className="formLabel">Browse Image (TH - Mobile)</label>
							<input 
								name="selectedFile2"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput2 => this.fileInput2 = fileInput2}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput2.click()} className="formFile">Pick File</button>
							{this.state.selectedFile2 && this.state.selectedFile2.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(2)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading2 && 'Progress: '+this.state.loading2 + '%'}</div>
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
