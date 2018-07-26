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

class Brandlist extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: null
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

	_handleLogout() {
	 	this.props.logoutUser()
	 }

	render() {
		if(!this.props.user) return <div></div>;
		const brands = [
			{ name: 'tummour', img: '/static/images/00-global/tm.png' },
			{ name: 'laoyuan', img: '/static/images/00-global/ly.png' },
			{ name: 'jaewhon', img: '/static/images/00-global/jh.png' },
			{ name: 'pho', img: '/static/images/00-global/ph.png' },
			{ name: 'granny', img: '/static/images/00-global/ky.png' },
			{ name: 'kruathai', img: '/static/images/00-global/kt.png' },
			{ name: 'detummour', img: '/static/images/00-global/tm-en.png' },
		]

		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Brands" />
				</div>

				<div className="contentAdmin">
					<Header title="Brands" user={(this.state.user && this.state.user.email)} handleLogout={() => this._handleLogout()} />
					<Card title="Brands" subTitle="List of Brands">
						
						<div className="promotioninfo">
							<div className="tab">
								<div className="tabcontent" style={{backgroundColor: 'transparent', width: '100%', padding: '0'}}>
									<ul className="all-promotions">
										
										{brands.map((brand, index) => (
											<li className="each-promotion" key={index}>
												<Link href={"/admin/brand/"+brand.name}><a style={{width: '88%', textAlign: "center"}}>
													<img src={brand.img} style={{maxWidth: '90%', border: 'solid 1px grey', backgroundColor: 'black'}} alt={brand.name}/>
												</a></Link>
											</li>
										))}
										
									</ul>
								</div>
							</div>
						</div>

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
})(Brandlist)