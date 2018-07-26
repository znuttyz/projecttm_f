import React, { Component } from 'react'
import Link from 'next/link'

import { Sidebar, Header, Card, Table } from '../components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
} from '../../actions'

import '../../../styles/index.scss'

class Region extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: null,
			brand: props.url.query.brand,
			region: props.url.query.region,
			isDisable: false,
			name_th: "",
			name_en: "",
			name_cn: "",
			phone_th: "",
			phone_en: "",
			phone_cn: "",
			add: [],
		}
	}

	componentWillMount() {
		this.props.loginUserCheck()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.user) {
			this.setState({ user: nextProps.user })
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_handleDelete(id) {
		console.log('delete', id)
	}

	_handleLogout() {
	 	this.props.logoutUser()
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
					<Card title={"Brand: "+this.state.brand+" Region: "+this.state.region} subTitle={this.state.brand}>
						
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
								<tr key={1}>
									<td>1</td>
									<td>test</td>
									<td>0987665</td>
									<td>
										<a href="#" onClick={()=>_handleDelete(1)}>Delete</a>
									</td>
								</tr>


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
									<td><div className="formContainer"><button className="formFile submitBtn" style={{width: '50%'}}>SUBMIT</button></div></td>
								</tr>
							</tbody>
						</table>

					</Card>
				</div>
						
			    	
			</div>
		)
	}

}

const mapStateToProps = ({ auth }) => {
	return {
		user: auth.user
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser
})(Region)