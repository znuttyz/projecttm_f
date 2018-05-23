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
			body: "",
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
			let sdate = new Date(nextProps.promotion.start_date)
			let edate = new Date(nextProps.promotion.end_date)
			this.setState({
				brand: nextProps.promotion.brand,
				title: nextProps.promotion.title,
				body: nextProps.promotion.body,
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

	_onHandleSubmit() {
		this.setState({ disableInput: true })

		if(this.state.selectedFile[0].name === this.props.promotion.banner_th) {
			let { sday, smonth, syear, eday, emonth, eyear } = this.state
			let sdate = new Date(syear, smonth-1, sday)
			let edate = new Date(eyear, emonth-1, eday)
			let postData = {
				brand: this.state.brand,
				title: this.state.title,
				body: this.state.body,
				start_date: sdate.getTime(),
				end_date: edate.getTime()
			}
			const id = this.state.id
			this.props.promotionUpdate(id, postData)
		} else {
			// Handle array file upload
			const promiseSerial = funcs =>
			  funcs.reduce((promise, func) =>
			    promise.then(result => func().then(Array.prototype.concat.bind(result))),
			    Promise.resolve([]))
			const funcs = this.state.selectedFile.map((file, index) => () => {
				const fd = new FormData()
				fd.append('image', file, file.name)
				this.setState({ loading: Math.round(-100/(index-this.state.selectedFile.length))-20 })
				return axios.post('https://us-central1-tummour-original.cloudfunctions.net/uploadFile', fd)
			})
			promiseSerial(funcs)
			.then(res => {

				// axios.get('https://us-central1-tummour-original.cloudfunctions.net/getFile?filename='+this.state.selectedFile[0].name)
				// .then(res => {
				let src = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+this.state.selectedFile[0].name+'?alt=media'
				let { sday, smonth, syear, eday, emonth, eyear } = this.state
				let sdate = new Date(syear, smonth-1, sday)
				let edate = new Date(eyear, emonth-1, eday)
				let postData = {
					brand: this.state.brand,
					title: this.state.title,
					body: this.state.body,
					start_date: sdate.getTime(),
					end_date: edate.getTime(),
					banner_th: src
				}
				const id = this.state.id
				this.props.promotionUpdate(id, postData)
				// })
			})
			.catch(console.error.bind(console))
		}
			
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
								body: this.state.body
							}}
						/>

						<div className="formContainer">
							<label className="formLabel">Browse Image Banner <span style={{textTransform:'lowercase'}}>(500 x 500 px)</span></label>
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
