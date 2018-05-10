const news = (props) => (
	<div>
		<div className="formContainer">
			<label className="formLabel">Name</label>
			<input type="text" className="formControl" name="name" onChange={(event) => props.handleChange(event)} disabled={props.isDisable}  />
		</div>
		<div className="formContainer">
			<label className="formLabel">Sub-body</label>
			<textarea className="formControl textarea" name="subbody" onChange={(event) => props.handleChange(event)}  rows="3" disabled={props.isDisable}/>
		</div>
		<div className="formContainer">
			<label className="formLabel">body</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable}/>
		</div>

 		<div className="formContainer">
			<label className="formLabel">Browse Image (Banner)</label>
			<input 
				name="selectedFile1"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput1 => this.fileInput1 = fileInput1}
			/>
			<button onClick={() => this.fileInput1.click()} className="formFile">Pick File</button>
			{ props.file1 && props.file1.name }
		</div>
		<div className="formContainer">
			<label className="formLabel">Browse Image</label>
			<input 
				name="selectedFile2"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput2 => this.fileInput2 = fileInput2}
			/>
			{ props.file1 && <button onClick={() => this.fileInput2.click()} className="formFile">Pick File</button> }
			{ props.file2 && props.file2.name }
		</div>
		<div className="formContainer">
			<label className="formLabel">Browse Image</label>
			<input 
				name="selectedFile3"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput3 => this.fileInput3 = fileInput3}
			/>
			{ props.file2 && <button onClick={() => this.fileInput3.click()} className="formFile">Pick File</button> }
			{ props.file3 && props.file3.name }
		</div>
		<div className="formContainer">
			<label className="formLabel">Browse Image</label>
			<input 
				name="selectedFile4"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput4 => this.fileInput4 = fileInput4}
			/>
			{ props.file3 && <button onClick={() => this.fileInput4.click()} className="formFile">Pick File</button> }
			{ props.file4 && props.file4.name }
		</div>
		<div className="formContainer">
			<label className="formLabel">Browse Image</label>
			<input 
				name="selectedFile5"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput5 => this.fileInput5 = fileInput5}
			/>
			{ props.file4 && <button onClick={() => this.fileInput5.click()} className="formFile">Pick File</button> }
			{ props.file5 && props.file5.name }
		</div>
		<div className="formContainer">
			<label className="formLabel">Browse Image</label>
			<input 
				name="selectedFile6"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput6 => this.fileInput6 = fileInput6}
			/>
			{ props.file5 && <button onClick={() => this.fileInput6.click()} className="formFile">Pick File</button> }
			{ props.file6 && props.file6.name }
		</div>

	</div>
)

const promotion = (props) => (
	<div>
		<div className="formContainer">
			<label className="formLabel">Name</label>
			<input type="text" className="formControl" name="name" onChange={(event) => props.handleChange(event)}  />
		</div>
		<div className="formContainer">
			<label className="formLabel">Sub-body</label>
			<textarea className="formControl textarea" name="subbody" onChange={(event) => props.handleChange(event)}  rows="3"/>
		</div>
		<div className="formContainer">
			<label className="formLabel">body</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5"/>
		</div>

		<div className="formContainer">
			<label className="formLabel">Browse Image (Banner)</label>
			<input 
				name="selectedFile1"
				type="file"
				style={{display: 'none'}}
		        onChange={event => props.handleFile(event)}
		        ref={fileInput1 => this.fileInput1 = fileInput1}
			/>
			<button onClick={() => this.fileInput1.click()} className="formFile">Pick File</button>
			{ props.file1 && props.file1.name }
		</div>
	</div>
)


const Form = (props) => {
	if(props.title === "News") {
		return news(props)
	} else if (props.title === "Promotion") {
		return promotion(props)
	}
	return null;
}

export { Form }