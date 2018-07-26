import React, { Component } from 'react'
import Link from 'next/link'

import { Sidebar, Header, Card, Table } from '../components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	brandCreateRegion,
	brandFetchRegion,
	brandDeleteRegion
} from '../../actions'

import '../../../styles/index.scss'

class Region extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: null,
			brand_url: props.url.query.brand,
			region: props.url.query.region,
			isDisable: false,
			name_th: "",
			name_en: "",
			name_cn: "",
			phone_th: "",
			phone_en: "",
			phone_cn: "",
			regions: [],
			add: []
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
		this.props.brandFetchRegion(this.state.brand_url, this.state.region)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
		if(nextProps.region) {
			this.setState({ regions: nextProps.region })
		}
		if(nextProps.isCreate) {
			this.setState({
				isDisable: false,
				name_th: "",
				name_en: "",
				name_cn: "",
				phone_th: "",
				phone_en: "",
				phone_cn: "",
			})
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_handleDelete(id) {
		if(confirm('Are you sure you want to DELETE this?')){
			this.props.brandDeleteRegion(this.state.brand_url, this.state.region, id)
		}
	}

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	 _onHandleSubmit() {
		if(!this.state.name_th || !this.state.name_en || !this.state.name_cn || !this.state.phone_th || !this.state.phone_en || !this.state.phone_cn) {
			alert('Please fill in all form')
			return;
		}

		this.setState({ isDisable: true })
		let postData = {
			name_th: this.state.name_th,
			name_en: this.state.name_en,
			name_cn: this.state.name_cn,
			phone_th: this.state.phone_th,
			phone_en: this.state.phone_en,
			phone_cn: this.state.phone_cn
		}
		this.props.brandCreateRegion(this.state.brand_url, this.state.region, postData)
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
					<Card title={"Brand: "+this.state.brand_url+" Region: "+this.state.region} subTitle={this.state.brand_url}>

						<Link href={"/admin/brand/"+this.state.brand_url}><a style={{fontSize: '22px', textTransform: 'uppercase', width: 'intrinsic'}}>BACK TO {this.state.brand_url}</a></Link>

						<table className="tableAdmin">
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Phone</th>
									<th>Edit</th>
								</tr>
							</thead>
							<tbody>
								{ this.state.regions.map((item, index) => (
									<tr key={index+1}>
										<td>{index+1}</td>
										<td>{item.name_th}</td>
										<td>{item.phone_th}</td>
										<td>
											<a href="#" onClick={()=>this._handleDelete(item.id)}>Delete</a>
										</td>
									</tr>
								)) }
								


								<tr>
									<td>TH</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="name_th" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.name_th} placeholder="NAME TH" />
										</div>
									</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="phone_th" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.phone_th} placeholder="PHONE TH" />
										</div>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>EN</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="name_en" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.name_en} placeholder="NAME EN" />
										</div>
									</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="phone_en" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.phone_en} placeholder="PHONE EN" />
										</div>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>CN</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="name_cn" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.name_cn} placeholder="NAME CN" />
										</div>
									</td>
									<td>
										<div className="formContainer">
											<input type="text" className="formControl" name="phone_cn" onChange={(event) => this._onHandleChange(event)} disabled={this.state.isDisable} value={this.state.phone_cn} placeholder="PHONE CN" />
										</div>
									</td>
									<td><div className="formContainer"><button onClick={() => this._onHandleSubmit()} className="formFile submitBtn" style={{width: '50%'}}>SUBMIT</button></div></td>
								</tr>
							</tbody>
						</table>

					</Card>
				</div>
						
			    	
			</div>
		)
	}

}

const mapStateToProps = ({ auth, brand }) => {
	return {
		user: auth.user,
		region: brand.region,
		isCreate: brand.isCreate
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, brandCreateRegion, brandFetchRegion, brandDeleteRegion
})(Region)