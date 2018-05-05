import React, { Component } from 'react'
import { Head, SoonElements } from './components'

import '../styles/index.scss'

class Soon extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original" />
				<SoonElements />
			</div>
		)
	}
}

export default Soon;