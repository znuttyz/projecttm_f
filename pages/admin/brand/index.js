import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

import { Sidebar, Header, Card, Table, Form } from '../components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	brandFetch,
	brandUpdate
} from '../../actions'

import '../../../styles/index.scss'

class Brand extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: null,
			brand_url: props.url.query.brand,
			disableInput: false,
			desc_th: "",
			desc_en: "",
			desc_cn: "",
			selectedFile: [],
			loading: null,
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.brandFetch(this.state.brand_url)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
		if(nextProps.brand) {
			let tmp = []
			tmp[0] = {name: nextProps.brand.menu_th}
			tmp[1] = {name: nextProps.brand.menu_en}
			tmp[2] = {name: nextProps.brand.menu_cn}
			this.setState({
				desc_th: nextProps.brand.desc_th,
				desc_en: nextProps.brand.desc_en,
				desc_cn: nextProps.brand.desc_cn,
				selectedFile: tmp
			})
		}
		if(nextProps.isUpdate) {
			this.setState({ loading: 100 })
			window.location = '/admin/brand/'+this.state.brand_url
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
			if(file.name === this.props.brand.menu_th && index == 0) { 
				filename1 = file.name
				return new Promise((resolve, reject) => resolve(filename1))
			} else if (file.name === this.props.brand.menu_en && index == 1) {
				filename2 = file.name
				return new Promise((resolve, reject) => resolve(filename2))
			} else if(file.name === this.props.brand.menu_cn && index == 2) {
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
					oldfile = this.props.brand.menu_th.substr(84, 17);
					filename1 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
				} else if (index == 1) { 
					oldfile = this.props.brand.menu_en.substr(84, 17);
					filename2 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
				} else if (index == 2) { 
					oldfile = this.props.brand.menu_cn.substr(84, 17);
					filename3 = 'https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/upload%2F'+filename+'?alt=media'
				}

				if(oldfile) {
					return axios.post('https://us-central1-tummour-original.cloudfunctions.net/deleteFile', { filename: oldfile })
				}
			})
		})
		promiseSerial(funcs)
		.then(res => {
			let { day, month, year } = this.state
			let date = new Date(year, month-1, day)
			let postData = {
				desc_th: this.state.desc_th,
				desc_en: this.state.desc_en,
				desc_cn: this.state.desc_cn,
				menu_th: filename1,
				menu_en: filename2,
				menu_cn: filename3
			}
			const brand_url = this.state.brand_url
			console.log('postData',postData)
			this.props.brandUpdate(brand_url, postData)
		})
		.catch(console.error.bind(console))

	}

	 render() {
		if(!this.props.user) return <div></div>;

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Brands" />
				</div>

				<div className="contentAdmin">
					<Header title="Brands" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />
					<Card title={"Brand: "+this.state.brand_url} subTitle={this.state.brand_url}>
						
						<Form 
							title="Brand"
							handleChange={(event) => this._onHandleChange(event)} 
							isDisable={this.state.disableInput}
							data={{
								desc_th: this.state.desc_th,
								desc_en: this.state.desc_en,
								desc_cn: this.state.desc_cn
							}}
						/>

						<div className="formContainer">
							<label className="formLabel">Browse File (TH) <span style={{textTransform:'lowercase'}}>(.pdf)</span></label>
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
							<label className="formLabel">Browse File (EN) <span style={{textTransform:'lowercase'}}>(.pdf)</span></label>
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
							<label className="formLabel">Browse File (CN) <span style={{textTransform:'lowercase'}}>(.pdf)</span></label>
							<input 
								type="file"
								style={{display: 'none'}}
						        onChange={event => this.fileSelectedHandler(event, 2)}
						        ref={fileInput3 => this.fileInput3 = fileInput3}
							/>
							<button onClick={() => this.fileInput3.click()} className="formFile">Pick File</button>
							{ this.state.selectedFile[2] && this.state.selectedFile[2].name }
						</div>

						<div>
							<div className="formContainer" style={{fontSize: '24px'}}>
								REGION
								<Link href={"/admin/brand/"+this.state.brand_url+"/north"}><button className="formFile">NORTH</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/south"}><button className="formFile">SOUTH</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/east"}><button className="formFile">EAST</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/west"}><button className="formFile">WEST</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/central"}><button className="formFile">CENTRAL</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/northeast"}><button className="formFile">NORTHEAST</button></Link>
								<Link href={"/admin/brand/"+this.state.brand_url+"/foreign"}><button className="formFile">FOREIGN</button></Link>
							</div>
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

const mapStateToProps = ({ auth, brand }) => {
	return {
		user: auth.user,
		brand: brand.brand,
		isUpdate: brand.isUpdate
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, brandFetch, brandUpdate
})(Brand)