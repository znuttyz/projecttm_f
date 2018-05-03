import React, { Component } from 'react'
import { Sidebar, Card } from './components'

import '../../styles/index.scss'

class Banner_edit extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			tag: "",
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
					<Sidebar active="Banners" />
				</div>

				
				<Card title="Edit Banners" subTitle="" isEdit={true}>
					<div className="formContainer">
						<label className="formLabel">Name</label>
						<input type="text" className="formControl" name="name" onChange={(event) => this._onHandleChange(event)} value={this.state.name} />
					</div>
					<div className="formContainer">
						<label className="formLabel">Tag</label>
						<input type="text" className="formControl" name="tag" onChange={(event) => this._onHandleChange(event)} value={this.state.tag} />
					</div>
					<div className="formContainer">
						<label className="formLabel">Browse Image</label>
						<input 
							type="file"
							style={{display: 'none'}}
					        onChange={this.fileSelectedHandler}
					        ref={fileInput => this.fileInput = fileInput}
						/>
						<button onClick={() => this.fileInput.click()} className="formFile">Pick File</button>
					</div>
				</Card>	
			    	
			</div>
		)
	}
}

export default Banner_edit