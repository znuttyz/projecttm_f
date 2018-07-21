import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	newsFetchById,
	newsUpdate
} from '../actions'


import '../../styles/index.scss'

class News_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
			title: "",
			title_en: "",
			title_cn: "",
			body: "",
			body_en: "",
			body_cn: "",
			selectedFile: [],
			loading: null,
			disableInput: false,
			day: '',
			month: '',
			year: ''
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
			tmp[1] = {name: nextProps.news.banner_en}
			tmp[2] = {name: nextProps.news.banner_cn}
			let date = new Date(nextProps.news.date)
			this.setState({
				title: nextProps.news.title,
				title_en: nextProps.news.title_en,
				title_cn: nextProps.news.title_cn,
				body: nextProps.news.body,
				body_en: nextProps.news.body_en,
				body_cn: nextProps.news.body_cn,
				selectedFile: tmp,
				day: date.getDate(),
				month: date.getMonth()+1,
				year: date.getFullYear()
			})
		}
		if(nextProps.isUpdate) {
			this.setState({ loading: 100 })
			window.location = '/admin/news'
		}
	}

	fileSelectedHandler(event, id) {
		let tmp = this.state.selectedFile
		tmp[id] = event.target.files[0]
		this.setState({ selectedFile: tmp })
	};

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_handleLogout() {
	 	this.props.logoutUser()
	}

	_onHandleSubmit() {
		this.setState({ disableInput: true })
		let filename1, filename2, filename3

		// Handle array file upload
		const promiseSerial = funcs =>
		  funcs.reduce((promise, func) =>
		    promise.then(result => func().then(Array.prototype.concat.bind(result))),
		    Promise.resolve([]))

		const funcs = this.state.selectedFile.map((file, index) => () => {
			if(file.name === this.props.news.banner_th) { 
				filename1 = file.name
				return new Promise((resolve, reject) => resolve(filename1))
			} else if (file.name === this.props.news.banner_en) {
				filename2 = file.name
				return new Promise((resolve, reject) => resolve(filename2))
			} else if(file.name === this.props.news.banner_cn) {
				filename3 = file.name
				return new Promise((resolve, reject) => resolve(filename3))
			}
			const filename = Date.now()+"."+file.name.split('.').pop()
			const fd = new FormData()
			fd.append('image', file, filename)
			this.setState({ loading: Math.round(-100/(index-this.state.selectedFile.length))-20 })
			return axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd)
				.then(()=> {
					if(index == 0) filename1 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
					else if (index == 1) filename2 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
					else if (index == 2) filename3 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
				})
		})
		promiseSerial(funcs)
		.then(res => {
			let { day, month, year } = this.state
			let date = new Date(year, month-1, day)
			let postData = {
				title: this.state.title,
				title_en: this.state.title_en,
				title_cn: this.state.title_cn,
				body: this.state.body,
				body_en: this.state.body_en,
				body_cn: this.state.body_cn,
				date: date.getTime(),
				banner_th: filename1,
				banner_en: filename2,
				banner_cn: filename3
			}
			const id = this.state.id
			this.props.newsUpdate(id, postData)
		})
		.catch(console.error.bind(console))
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

					<Card title={"News's id: " + this.state.id} subTitle="Edit News" isEdit={true}>
						<Form 
							title="News"
							handleChange={(event) => this._onHandleChange(event)} 
							isDisable={this.state.disableInput}
							data={{
								title: this.state.title,
								title_en: this.state.title_en,
								title_cn: this.state.title_cn,
								body: this.state.body,
								body_en: this.state.body_en,
								body_cn: this.state.body_cn
							}}
						/>

						<div className="formContainer">
							<label className="formLabel">Browse Image (Banner TH) <span style={{textTransform:'lowercase'}}>(900 x 490 px)</span></label>
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
							<label className="formLabel">Browse Image (Banner EN) <span style={{textTransform:'lowercase'}}>(900 x 490 px)</span></label>
							<input 
								type="file"
								style={{display: 'none'}}
						        onChange={event => this.fileSelectedHandler(event, 1)}
						        ref={fileInput2 => this.fileInput2 = fileInput2}
							/>
							<button onClick={() => this.fileInput2.click()} className="formFile">Pick File</button>
							{ this.state.selectedFile[1] && this.state.selectedFile[1].name }
						</div>

						<div className="formContainer">
							<label className="formLabel">Browse Image (Banner CN) <span style={{textTransform:'lowercase'}}>(900 x 490 px)</span></label>
							<input 
								type="file"
								style={{display: 'none'}}
						        onChange={event => this.fileSelectedHandler(event, 2)}
						        ref={fileInput3 => this.fileInput3 = fileInput3}
							/>
							<button onClick={() => this.fileInput3.click()} className="formFile">Pick File</button>
							{ this.state.selectedFile[2] && this.state.selectedFile[2].name }
						</div>

						<div className="formContainer">
							<label className="formLabel"> Day </label>
							<input type="number" value={this.state.day} name="day" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Month </label>
							<input type="number" value={this.state.month} name="month" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Year </label>
							<input type="number" value={this.state.year} name="year" onChange={(event) => this._onHandleChange(event)} />
						</div>

						<div className="formContainer">
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit()}>UPDATE</button>
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
		news: news.news,
		isUpdate: news.isUpdate
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, newsFetchById, newsUpdate
})(News_edit)
