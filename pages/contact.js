import React, { Component } from 'react'
import { Head, Nav, AllBanner, ContactInfo, ContactSns, ContactFranchise, Footer } from './components'

import '../styles/index.scss'

class Contact extends Component {

	constructor(props) {
		super(props)
		this.state = {
			topic: '',
			name: '',
			email: '',
			phonenumber: '',
			body: ''
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onHandleSubmit(event) {
		event.preventDefault()
	 	console.log('submit')

	 }

	render() {
		return (
			<div>
				<Head title="tummour original - contact"/>
				<Nav isActive="contact"/>
				<ContactInfo 
					handleChange={(event) => this._onHandleChange(event)}
					onSubmit={(event) => this._onHandleSubmit(event)}
				/>
				<ContactSns />
				<ContactFranchise />
				<Footer />
			</div>
		)
	}
}

export default Contact;