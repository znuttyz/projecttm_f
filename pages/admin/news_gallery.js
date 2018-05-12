import React, { Component } from 'react'
import axios from 'axios'
import { Sidebar, Card, Form, Header, Gallery } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore, 
	loginUserCheck, 
	logoutUser,
	newsFetchImageById
} from '../actions'


import '../../styles/index.scss'

class News_gallery extends Component {

	constructor(props) {
		super(props)
		this.state = {
			id: props.url.query.id,
			images: []
		}
	}

	componentWillMount() {
		this.props.newsFetchImageById(this.state.id)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.images) {
			this.setState({ images: nextProps.images })
		}
	}

	render() {
		return (
			<div className="wrapperAdmin">
				<div className="sidebarAdmin">
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={(this.props.user && this.props.user.email)} handleLogout={() => this._handleLogout()} />

					<Card title={"News's id: " + this.state.id} subTitle="Edit News's Gallery" isEdit={true}>

						<Gallery id={this.state.id} images={this.state.images}/>

					</Card>

				</div>

			</div>
		)
	}
}

const mapStateToProps = ({ auth, news }) => {
	return {
		user: auth.user,
		images: news.images
	}
}

export default withRedux(initStore, mapStateToProps, { 
	loginUserCheck, logoutUser, newsFetchImageById
})(News_gallery)