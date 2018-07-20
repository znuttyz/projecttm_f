import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header, Gallery_form } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	newsCreateImageById
} from '../actions'


import '../../styles/index.scss'

class News_gallery_add extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
			selectedFile: null,
			loading: null,
			disableInput: false
		}
	}

	fileSelectedHandler = event => {
	    this.setState({ 
	    	[event.target.name]: event.target.files[0]
	    })
	}

	fileUploadHandler = () => {
		this.setState({ loading: 0 })
		const filename = Date.now()+"."+this.state.selectedFile.name.split('.').pop();
	    const fd = new FormData()
	    fd.append('image', this.state.selectedFile, filename)
	    axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd, {
	      onUploadProgress: progressEvent => {
	      	let progress = Math.round(progressEvent.loaded / progressEvent.total * 100)
	        console.log('Upload Progress: ' + progress + '%')
	        this.setState({ loading: progress })
	      }
	    })
	    .then(res => {
	    	// axios.get('https://us-central1-tummour-original.cloudfunctions.net/getFile?filename='+this.state.selectedFile.name)
	    	// .then(res => {
	    	let src = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
    		// let src = res.data.url
    		this.props.newsCreateImageById(this.state.id, src)
    		this.setState({ loading: 100 })
    		window.location = "/admin/news"
	    	// })
	    	
	    })
	}

	render() {
		return (
			<div className="wrapperAdmin">
				<div className="sidebarAdmin">
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title={"News's id: " + this.state.id} subTitle="Edit News's Gallery" isEdit={true}>

						<Gallery_form 
							fileHandle={this.fileSelectedHandler}
							isDisable={this.state.disableInput}
							file={this.state.selectedFile}
							submitHandle={this.fileUploadHandler}
							loading={this.state.loading}
						/>

					</Card>

				</div>

			</div>
		)
	}
}

const mapStateToProps = ({ auth, news }) => {
	return {
		user: auth.user,
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, newsCreateImageById
})(News_gallery_add)