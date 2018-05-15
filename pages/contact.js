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
				<Head title="tummour original"/>
				<Nav isActive="contact"/>
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fbanner.jpg?alt=media&token=052ab2c6-d287-4ae5-86b4-38015bd40af6"/>
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