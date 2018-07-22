import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser, 
	bannerUpdate,
	bannerFetch
} from '../actions'


import '../../styles/index.scss'

class Banner_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
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
		this.props.bannerFetch()
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

	fileUploadHandler(file, lang, loading, oldfile) {
		this.setState({ [loading]: 1 })
		const filename = Date.now()+"."+file.name.split('.').pop();
	    const fd = new FormData()
	    fd.append('image', file, filename)
	    axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd, {
	      onUploadProgress: progressEvent => {
	      	let progress = Math.round(progressEvent.loaded / progressEvent.total * 100)
	        console.log('Upload Progress: ' + progress + '%')
	        this.setState({ [loading]: progress })
	      }
	    })
	    .then(res => {
    		let src = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
    		this.props.bannerUpdate({ [lang]: src })

			axios.post('https://us-central1-tummour-original.cloudfunctions.net/deleteFile', { filename: oldfile })
    		.then(res => {
    			this.setState({ [loading]: 100 })
    		})
	    		
	    })
	}

	_onHandleSubmit(id) {
		if(id === 1) {
			let oldfile = this.props.banner.src_desktop_th.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile1, "src_desktop_th", "loading1", oldfile)
		} else if (id === 2) {
			let oldfile = this.props.banner.src_mobile_th.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile2, "src_mobile_th", "loading2", oldfile)
		} else if (id === 3) {
			let oldfile = this.props.banner.src_desktop_en.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile3, "src_desktop_en", "loading3", oldfile)
		} else if (id === 4) {
			let oldfile = this.props.banner.src_mobile_en.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile4, "src_mobile_en", "loading4", oldfile)
		} else if (id === 5) {
			let oldfile = this.props.banner.src_desktop_cn.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile5, "src_desktop_cn", "loading5", oldfile)
		} else if (id === 6) {
			let oldfile = this.props.banner.src_mobile_cn.substr(84, 17);
			this.fileUploadHandler(this.state.selectedFile6, "src_mobile_cn", "loading6", oldfile)
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
							<label className="formLabel">Browse Image (TH - Desktop) <span style={{textTransform:'lowercase'}}>2560 x 960 px</span></label>
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
							<label className="formLabel">Browse Image (TH - Mobile) <span style={{textTransform:'lowercase'}}>414 x 230 px</span></label>
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

						<div className="formContainer">
							<label className="formLabel">Browse Image (EN - Desktop) <span style={{textTransform:'lowercase'}}>2560 x 960 px</span></label>
							<input 
								name="selectedFile3"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput3 => this.fileInput3 = fileInput3}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput3.click()} className="formFile">Pick File</button>
							{this.state.selectedFile3 && this.state.selectedFile3.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(3)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading3 && 'Progress: '+this.state.loading3 + '%'}</div>
						</div>
						<div className="formContainer">
							<label className="formLabel">Browse Image (EN - Mobile) <span style={{textTransform:'lowercase'}}>414 x 230 px</span></label>
							<input 
								name="selectedFile4"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput4 => this.fileInput4 = fileInput4}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput4.click()} className="formFile">Pick File</button>
							{this.state.selectedFile4 && this.state.selectedFile4.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(4)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading4 && 'Progress: '+this.state.loading4 + '%'}</div>
						</div>

						<div className="formContainer">
							<label className="formLabel">Browse Image (CN - Desktop) <span style={{textTransform:'lowercase'}}>2560 x 960 px</span></label>
							<input 
								name="selectedFile5"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput5 => this.fileInput5 = fileInput5}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput5.click()} className="formFile">Pick File</button>
							{this.state.selectedFile5 && this.state.selectedFile5.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(5)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading5 && 'Progress: '+this.state.loading5 + '%'}</div>
						</div>
						<div className="formContainer">
							<label className="formLabel">Browse Image (CN - Mobile) <span style={{textTransform:'lowercase'}}>414 x 230 px</span></label>
							<input 
								name="selectedFile6"
								type="file"
								style={{display: 'none'}}
						        onChange={this.fileSelectedHandler}
						        ref={fileInput6 => this.fileInput6 = fileInput6}
						        disabled={this.state.disableInput}
							/>
							<button onClick={() => this.fileInput6.click()} className="formFile">Pick File</button>
							{this.state.selectedFile6 && this.state.selectedFile6.name}
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit(6)}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading6 && 'Progress: '+this.state.loading6 + '%'}</div>
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
		isUpdate: banner.isUpdate,
		banner: banner.banner
	}
}


export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, bannerUpdate, bannerFetch
})(Banner_edit)
