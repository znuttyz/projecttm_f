import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	newsFetchById
} from '../actions'


import '../../styles/index.scss'

class News_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
			title: "",
			subbody: "",
			body: "",
			selectedFile: [],
			loading: null,
			disableInput: false,
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.newsFetchById(this.state.id)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.news) {
			let tmp = []
			tmp[0] = {name: nextProps.news.banner_th}
			this.setState({
				title: nextProps.news.title,
				subbody: nextProps.news.sub_body,
				body: nextProps.news.body,
				selectedFile: tmp
			})
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
							isDisable={this.state.disableInput}
							data={{
								title: this.state.title,
								subbody: this.state.subbody,
								body: this.state.body
							}}
						/>

						<div className="formContainer">
							<label className="formLabel">Browse Image Banner</label>
							<input 
								type="file"
								style={{display: 'none'}}
						        onChange={event => this.fileSelectedHandler(event, 0)}
						        ref={fileInput1 => this.fileInput1 = fileInput1}
							/>
							<button onClick={() => this.fileInput1.click()} className="formFile">Pick File</button>
							{ this.state.selectedFile[0] && this.state.selectedFile[0].name }
						</div>

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

const mapStateToProps = ({ auth, news }) => {
	return {
		user: auth.user,
		news: news.news
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, newsFetchById
})(News_edit)
