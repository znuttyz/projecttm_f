import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, Nav, AllBanner, ContactInfo, ContactSns, ContactFranchise, Footer } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	messageCreate
} from './actions'

import '../styles/index.scss'

class Contact extends Component {

	constructor(props) {
		super(props)
		this.state = {
			topic: '',
			name: '',
			email: '',
			phone: '',
			body: '',
			error: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.isCreate) {
			location.reload()
		}
	}

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onHandleSubmit(event) {
		event.preventDefault()
	 	
	 	let { topic, name, email, phone, body } = this.state
	 	let date = Date.now()
	 	if(topic && name && email && phone && body) {
	 		let postData = { topic, name, email, phone, body, date, status: 0 }
	 		this.props.messageCreate(postData)
	 	} else {
	 		this.setState({error: true})
	 	}
	 }

	render() {
		return (
			<div>
				<Head title="Tummour Original - Contact"/>
				<Nav isActive="contact"/>
				<ContactInfo 
					handleChange={(event) => this._onHandleChange(event)}
					onSubmit={(event) => this._onHandleSubmit(event)}
					error={this.state.error}
				/>
				<ContactSns />
				<ContactFranchise />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = ({ message }) => {
	return {
		isCreate: message.isCreate
	}
}


export default withRedux(initStore, mapStateToProps, { messageCreate })(Contact)
