import React, { Component } from 'react'
import { Sidebar, Card, Form } from './components'

import '../../styles/index.scss'

class News_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			subbody: "",
			body: "",
			selectedFile: null
		}
	}

	fileSelectedHandler = event => {
	    this.setState({ 
	    	selectedFile: event.target.files[0]
	    })
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="News" />
				</div>

				
				<Card title="Edit News" subTitle="" isEdit={true}>
					<Form handleChange={(event) => this._onHandleChange(event)} handleFile={this.fileSelectedHandler}/>
				</Card>	
			    	
			</div>
		)
	}
}

export default News_edit