const Gallery_form = (props) => {
	return (
		<div>
			<div className="formContainer">
				<label className="formLabel">Browse Image</label>
				<input 
					name="selectedFile"
					type="file"
					style={{display: 'none'}}
			        onChange={props.fileHandle}
			        ref={fileInput => this.fileInput = fileInput}
			        disabled={props.isDisable}
				/>
				<button onClick={() => this.fileInput.click()} className="formFile">Pick File</button>
				{props.file && props.file.name}
			</div>

			<div className="formContainer">
				<button className="formFile submitBtn" onClick={() => props.submitHandle()}>SUBMIT</button>
				<div className="fileLoader">{props.loading && props.loading + '%'}</div>
			</div>
		</div>
	)
}

export { Gallery_form }