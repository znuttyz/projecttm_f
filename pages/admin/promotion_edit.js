import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	promotionFetchById,
	promotionUpdate
} from '../actions'


import '../../styles/index.scss'

class Promotion_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
			brand: "",
			title: "",
			title_en: "",
			title_cn: "",
			body: "",
			body_en: "",
			body_cn: "",
			selectedFile: [],
			loading: null,
			disableInput: false,
			sday: '',
			smonth: '',
			syear: '',
			eday: '',
			emonth: '',
			eyear: ''
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.promotionFetchById(this.state.id)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.promotion) {
			let tmp = []
			tmp[0] = {name: nextProps.promotion.banner_th}
			tmp[1] = {name: nextProps.promotion.banner_en}
			tmp[2] = {name: nextProps.promotion.banner_cn}
			let sdate = new Date(nextProps.promotion.start_date)
			let edate = new Date(nextProps.promotion.end_date)
			this.setState({
				brand: nextProps.promotion.brand,
				title: nextProps.promotion.title,
				title_en: nextProps.promotion.title_en,
				title_cn: nextProps.promotion.title_cn,
				body: nextProps.promotion.body,
				body_en: nextProps.promotion.body_en,
				body_cn: nextProps.promotion.body_cn,
				selectedFile: tmp,
				sday: sdate.getDate(),
				smonth: sdate.getMonth()+1,
				syear: sdate.getFullYear(),
				eday: edate.getDate(),
				emonth: edate.getMonth()+1,
				eyear: edate.getFullYear()
			})
		}
		if(nextProps.isUpdate) {
			this.setState({ loading: 100 })
			window.location = '/admin/promotion'
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
			if(file.name === this.props.promotion.banner_th) { 
				filename1 = file.name
				return new Promise((resolve, reject) => resolve(filename1))
			} else if (file.name === this.props.promotion.banner_en) {
				filename2 = file.name
				return new Promise((resolve, reject) => resolve(filename2))
			} else if(file.name === this.props.promotion.banner_cn) {
				filename3 = file.name
				return new Promise((resolve, reject) => resolve(filename3))
			}
			const filename = Date.now()+"."+file.name.split('.').pop()
			const fd = new FormData()
			fd.append('image', file, filename)
			this.setState({ loading: Math.round(-100/(index-this.state.selectedFile.length))-20 })
			return axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd)
				.then(()=> {
					let oldfile
					if(index == 0) {
						oldfile = this.props.promotion.banner_th.substr(84, 17);
						filename1 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
					} else if (index == 1) {
						oldfile = this.props.promotion.banner_en.substr(84, 17);
						filename2 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
					} else if (index == 2) { 
						oldfile = this.props.promotion.banner_cn.substr(84, 17);
						filename3 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
					}

					return axios.post('https://us-central1-tummour-original.cloudfunctions.net/deleteFile', { filename: oldfile })
				})
		})
		promiseSerial(funcs)
		.then(res => {
			let { sday, smonth, syear, eday, emonth, eyear } = this.state
			let sdate = new Date(syear, smonth-1, sday)
			let edate = new Date(eyear, emonth-1, eday)
			let postData = {
				brand: this.state.brand,
				title: this.state.title,
				title_en: this.state.title_en,
				title_cn: this.state.title_cn,
				body: this.state.body,
				body_en: this.state.body_en,
				body_cn: this.state.body_cn,
				start_date: sdate.getTime(),
				end_date: edate.getTime(),
				banner_th: filename1,
				banner_en: filename2,
				banner_cn: filename3
			}
			const id = this.state.id
			this.props.promotionUpdate(id, postData)
		})
		.catch(console.error.bind(console))
			
	}


	render() {
		if(!this.props.user) return <div></div>;
		
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Promotions" />
				</div>

				<div className="contentAdmin">
					<Header title="Promotions" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title={"Promotion's id: " + this.state.id} subTitle="Edit Promotion" isEdit={true}>

						<div className="formContainer">
							<label className="formLabel">Select brand </label>
							<select name="brand" onChange={event => this._onHandleChange(event)} value={this.state.brand}>
								<option value="Tummour">Tummour</option>
								<option value="Laoyuan">Laoyuan</option>
								<option value="Jaewhon">Jaewhon</option>
								<option value="Pho">Pho</option>
							</select>
						</div>

						<Form 
							title="Promotion"
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
							<label className="formLabel">Browse Image (Banner TH) <span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<label className="formLabel">Browse Image (Banner EN) <span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<label className="formLabel">Browse Image (Banner CN) <span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<label className="formLabel"> Start: Day </label>
							<input type="number" value={this.state.sday} name="sday" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Month </label>
							<input type="number" value={this.state.smonth} name="smonth" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Year </label>
							<input type="number" value={this.state.syear} name="syear" onChange={(event) => this._onHandleChange(event)} />
						</div>

						<div className="formContainer">
							<label className="formLabel"> End: Day </label>
							<input type="number" value={this.state.eday} name="eday" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Month </label>
							<input type="number" value={this.state.emonth} name="emonth" onChange={(event) => this._onHandleChange(event)} />
							<label className="formLabel"> Year </label>
							<input type="number" value={this.state.eyear} name="eyear" onChange={(event) => this._onHandleChange(event)} />
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

const mapStateToProps = ({ auth, promotion }) => {
	return {
		user: auth.user,
		promotion: promotion.promotions,
		isUpdate: promotion.isUpdate
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, promotionFetchById, promotionUpdate
})(Promotion_edit)
