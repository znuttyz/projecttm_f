import React, { Component } from 'react'
import { Head, Nav, AllBanner, ContactInfo, ContactSns, ContactFranchise, Footer } from './components'

import '../styles/index.scss'

class Contact extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original"/>
				<Nav isActive="หน้าแรก"/>
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fbanner.jpg?alt=media&token=052ab2c6-d287-4ae5-86b4-38015bd40af6"/>
				<ContactInfo />
				<ContactSns />
				<ContactFranchise />
				<Footer />
			</div>
		)
	}
}

export default Contact;