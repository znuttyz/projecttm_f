import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
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

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
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
				console.log('en')
				break;
			case "cn":
				console.log('cn')
				break;
			default:
				content = require('../static/language/thai.json').contact
				footer = require('../static/language/thai.json').footer
		}

		return (
			<div>
				<Head title="Tummour Original - Contact"/>
				<Nav isActive="contact"/>
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
