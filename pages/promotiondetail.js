import React, { Component } from 'react'
import { Head, Nav, AllBanner, PromotionDetailElement, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	promotionFetchById
} from './actions'

import '../styles/index.scss'

class PromotionDetail extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id
		}
	}

	componentWillMount() {
		this.props.promotionFetchById(this.state.id)
	}

	render() {
		console.log(this.state.id)
		return (
			<div>
				<Head title="Tummour Original - Promotion" />
				<Nav isActive="news" />
				<PromotionDetailElement promotions={(this.props.promotions && this.props.promotions)}/>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ promotion }) => {
	return {
		promotions: promotion.promotions,
	}
}

export default withRedux(initStore, mapStateToProps, { 
	promotionFetchById
})(PromotionDetail)