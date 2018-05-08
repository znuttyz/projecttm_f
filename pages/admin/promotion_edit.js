import React, { Component } from 'react'
import { Sidebar, Card, Form, Header } from './components'

import '../../styles/index.scss'

class Promotion_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			subbody: "",
			body: "",
			selectedFile1: null
		}
	}

	fileSelectedHandler(event) {
		console.log(event.target.name)
	    this.setState({ 
	    	[event.target.name]: event.target.files[0]
	    })
	};

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	render() {
		console.log("test", this.state.selectedFile1)
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Promotions" />
				</div>

				<div className="contentAdmin">
					<Header title="Promotions" user={"tmp"} />

					<Card title="Promotion" subTitle="Edit Promotion" isEdit={true}>
						<Form 
							title="Promotion"
							handleChange={(event) => this._onHandleChange(event)} 
							handleFile={event => this.fileSelectedHandler(event)}
							file1={this.state.selectedFile1}
						/>
						
					</Card>	

				</div>
			    	
			</div>
		)
	}
}

export default Promotion_edit