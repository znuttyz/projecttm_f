const bannerForm = () => {
	return (
		<div>
			<div className="formContainer">
				<label className="formLabel">Name</label>
				<input type="text" placeholder="Company" className="formControl" value="Creative Code Inc." />
			</div>
			<div className="formContainer">
				<label className="formLabel">Tag</label>
				<input type="text" placeholder="Company" className="formControl" value="Creative Code Inc." />
			</div>
			<div className="formContainer">
				<label className="formLabel">Browse Image</label>
				<input 
					type="file"
					style={{display: 'none'}}
				/>
			</div>
		</div>
	)
}

const Form = ({ title }) => {
	let form;
	if(title === "banner") {
		form = bannerForm()
	}
	return (
		<div>
			{form}
		</div>
	)
}

export { Form }