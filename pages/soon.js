import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Head, SoonElements } from './components'

import '../styles/index.scss'

class Soon extends Component {

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}
	
	render() {
		return (
			<div>
				<Head title="Tummour Original" />
				<SoonElements />
			</div>
		)
	}
}

export default Soon;