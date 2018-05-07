import React, { Component } from 'react'
import { Sidebar, Card, Form, Header } from './components'

import '../../styles/index.scss'

class News_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			subbody: "",
			body: "",
			selectedFile1: null,
			selectedFile2: null,
			selectedFile3: null,
			selectedFile4: null,
			selectedFile5: null,
			selectedFile6: null
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
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={"tmp"} />

					<Card title="News" subTitle="Edit News" isEdit={true}>
						<Form 
							title="News"
							handleChange={(event) => this._onHandleChange(event)} 
							handleFile={event => this.fileSelectedHandler(event)}
							file1={this.state.selectedFile1}
							file2={this.state.selectedFile2}
							file3={this.state.selectedFile3}
							file4={this.state.selectedFile4}
							file5={this.state.selectedFile5}
							file6={this.state.selectedFile6}
						/>
						
					</Card>

				</div>	
			    	
			</div>
		)
	}
}

export default News_edit