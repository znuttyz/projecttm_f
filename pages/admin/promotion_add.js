import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser ,
	promotionCreate
} from '../actions'


import '../../styles/index.scss'

class Promotion_add extends Component {

	constructor(props) {
		super(props)
		const date = new Date()
		this.state = {
			brand: "Tummour",
			title: "",
			title_en: "",
			title_cn: "",
			body: "",
			body_en: "",
			body_cn: "",
			selectedFile: [],
			loading: null,
			disableInput: false,
			sday: date.getDate(),
			smonth: date.getMonth()+1,
			syear: date.getFullYear(),
			eday: date.getDate(),
			emonth: date.getMonth()+1,
			eyear: date.getFullYear()
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.isCreate) {
			this.setState({ loading: 100 })
			window.location = '/admin/promotion'
		}
	}

	_handleLogout() {
	 	this.props.logoutUser()
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

	_onHandleSubmit() {
		if(!this.state.title || !this.state.title_en || !this.state.title_cn ||
		  !this.state.body || !this.state.body_en || !this.state.body_cn ||
		  this.state.selectedFile.length !== 3) {
			alert('Please fill in all form')
			return;
		}

		this.setState({ disableInput: true })
		let filename1, filename2, filename3

		// Handle array file upload
		const promiseSerial = funcs =>
		  funcs.reduce((promise, func) =>
		    promise.then(result => func().then(Array.prototype.concat.bind(result))),
		    Promise.resolve([]))

		const funcs = this.state.selectedFile.map((file, index) => () => {
			const filename = Date.now()+"."+file.name.split('.').pop()
			const fd = new FormData()
			fd.append('image', file, filename)
			this.setState({ loading: Math.round(-100/(index-this.state.selectedFile.length))-20 })
			return axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd)
					.then(()=> {
						if(index == 0) filename1 = filename
						else if (index == 1) filename2 = filename
						else if (index == 2) filename3 = filename
					})
		})

		promiseSerial(funcs)
		.then(res => {
			let src_th = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename1+'?alt=media'
			let src_en = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename2+'?alt=media'
			let src_cn = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename3+'?alt=media'
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
				banner_th: src_th,
				banner_en: src_en,
				banner_cn: src_cn
			}
			this.props.promotionCreate(postData)
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

					<Card title="Promotion" subTitle="Edit Promotion" isEdit={true}>

						<div className="formContainer">
							<label className="formLabel">Select brand </label>
							<select name="brand" onChange={event => this._onHandleChange(event)}>
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
						/>

						<div className="formContainer">
							<label className="formLabel">Browse Image (Banner TH)<span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<label className="formLabel">Browse Image (Banner EN)<span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<label className="formLabel">Browse Image (Banner CN)<span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
							<button className="formFile submitBtn" onClick={() => this._onHandleSubmit()}>SUBMIT</button>
							<div className="fileLoader">{this.state.loading && 'Progress: ' + this.state.loading + '%'}</div>
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
		isCreate: promotion.isCreate
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, promotionCreate
})(Promotion_add)
