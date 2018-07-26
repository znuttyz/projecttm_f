import React, { Component } from 'react'
import Link from 'next/link'

import { Sidebar, Header, Card, Table, Form } from '../components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	brandFetch
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
			this.setState({
				desc_th: nextProps.brand.desc_th,
				desc_en: nextProps.brand.desc_en,
				desc_cn: nextProps.brand.desc_cn
			})
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
		brand: brand.brand
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, brandFetch
})(Brand)