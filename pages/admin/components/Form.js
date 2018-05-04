const Form = ({ handleChange, handleFile }) => {
	return (
		<div>
			<div className="formContainer">
				<label className="formLabel">Name</label>
				<input type="text" className="formControl" name="name" onChange={(event) => handleChange(event)}  />
			</div>
			<div className="formContainer">
				<label className="formLabel">Sub-body</label>
				<textarea className="formControl textarea" name="subbody" onChange={(event) => handleChange(event)}  rows="3"/>
			</div>
			<div className="formContainer">
				<label className="formLabel">body</label>
				<textarea className="formControl textarea" name="body" onChange={(event) => handleChange(event)}  rows="5"/>
			</div>
			<div className="formContainer">
				<label className="formLabel">Browse Image</label>
				<input 
					type="file"
					style={{display: 'none'}}
			        onChange={handleFile}
			        ref={fileInput => this.fileInput = fileInput}
				/>
				<button onClick={() => this.fileInput.click()} className="formFile">Pick File</button>
			</div>
		</div>
	)
}

export { Form }