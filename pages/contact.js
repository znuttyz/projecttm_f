import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, ContactInfo, ContactSns, ContactFranchise, Footer, Analytics } from './components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	messageCreate
} from './actions'

import '../styles/index.scss'

class Contact extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			topic: '',
			name: '',
			email: '',
			phone: '',
			body: '',
			error: false,
			lang: Cookies.get('lang')
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.isCreate) {
			alert('ได้รับ ข้อเสนอแนะ/การติดต่อ ของท่านเรียบร้อยแล้ว ขอบคุณค่ะ')
			location.reload()
		}
	}

	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	_onHandleSubmit(event) {
		event.preventDefault()
	 	this.setState({error: false})
	 	let { topic, name, email, phone, body } = this.state
	 	let date = Date.now()
	 	if(topic && name && email && phone && body && this.validateEmail(email)) {
	 		let postData = { topic, name, email, phone, body, date, status: 0 }
	 		this.props.messageCreate(postData)
	 	} else {
	 		this.setState({error: true})
	 	}
	 }

	render() {
		let content, footer
		switch(this.state.lang) {
			case "en":
				content = require('../static/language/en.json').contact
				footer = require('../static/language/en.json').footer
				break;
			case "cn":
				content = require('../static/language/cn.json').contact
				footer = require('../static/language/cn.json').footer
				break;
			default:
				content = require('../static/language/th.json').contact
				footer = require('../static/language/th.json').footer
		}

		if(!this.state.lang) return <div></div>
		return (
			<div>
				<Head title="Tummour Original - Contact"/>
				<Analytics />
				<Nav isActive="contact" handleLang={(lang)=>this._handleLang(lang)} navbar={content.navbar} navbarmb={content.navbarmb} />
				<ContactInfo 
					handleChange={(event) => this._onHandleChange(event)}
					onSubmit={(event) => this._onHandleSubmit(event)}
					error={this.state.error}
					content={content}
				/>
				<ContactSns content={content} />
				<ContactFranchise content={content} />
				<Footer footer={footer}/>
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
