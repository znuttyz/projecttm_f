import React, { Component } from 'react'
import { Head, Nav, AllBanner, PromotionInfo, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	promotionFetch,
	promotionFetchByBrand
} from './actions'

import '../styles/index.scss'

class Promotion extends Component {

	constructor(props) {
		super(props)
		this.state = {
			promotions: [],
			filter: "all"
		}
	}

	componentWillMount() {
		this.props.promotionFetch()
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.promotions) {
			console.log('nextprops',nextProps.promotions)
			this.setState({
				promotions: nextProps.promotions
			})
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    })
	    if(event.target.value === "All") {
	    	this.props.promotionFetch()
	    } else {
	    	this.props.promotionFetchByBrand(event.target.value)
	    }
	}

	render() {
		return (
			<div>
				<Head title="Tummour Original - Promotion" />
				<Nav isActive="news" />
				<PromotionInfo promotions={this.state.promotions} handleChange={event=>this._onHandleChange(event)}/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ promotion }) => {
	return {
		promotions: promotion.promotions
	}
}

export default withRedux(initStore, mapStateToProps, { promotionFetch, promotionFetchByBrand })(Promotion)