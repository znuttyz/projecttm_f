const news = (props) => (
	<div>

		<div className="formContainer">
			<label className="formLabel">Title (TH)</label>
			<input type="text" className="formControl" name="title" onChange={(event) => props.handleChange(event)} disabled={props.isDisable} value={(props.data && props.data.title)}  />
		</div>
		<div className="formContainer">
			<label className="formLabel">Title (EN)</label>
			<input type="text" className="formControl" name="title_en" onChange={(event) => props.handleChange(event)} disabled={props.isDisable} value={(props.data && props.data.title_en)}  />
		</div>
		<div className="formContainer">
			<label className="formLabel">Title (CN)</label>
			<input type="text" className="formControl" name="title_cn" onChange={(event) => props.handleChange(event)} disabled={props.isDisable} value={(props.data && props.data.title_cn)}  />
		</div>

		<div className="formContainer">
			<label className="formLabel">body (TH)</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body)}/>
		</div>
		<div className="formContainer">
			<label className="formLabel">body (EN)</label>
			<textarea className="formControl textarea" name="body_en" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body_en)}/>
		</div>
		<div className="formContainer">
			<label className="formLabel">body (CN)</label>
			<textarea className="formControl textarea" name="body_cn" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body_cn)}/>
		</div>

	</div>
)

const promotion = (props) => (
	<div>
		<div className="formContainer">
			<label className="formLabel">Name (TH)</label>
			<input type="text" className="formControl" name="title" onChange={(event) => props.handleChange(event)}  disabled={props.isDisable} value={(props.data && props.data.title)} />
		</div>
		<div className="formContainer">
			<label className="formLabel">Name (EN)</label>
			<input type="text" className="formControl" name="title_en" onChange={(event) => props.handleChange(event)}  disabled={props.isDisable} value={(props.data && props.data.title_en)} />
		</div>
		<div className="formContainer">
			<label className="formLabel">Name (CN)</label>
			<input type="text" className="formControl" name="title_cn" onChange={(event) => props.handleChange(event)}  disabled={props.isDisable} value={(props.data && props.data.title_cn)} />
		</div>

		<div className="formContainer">
			<label className="formLabel">body (TH)</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body)} />
		</div>
		<div className="formContainer">
			<label className="formLabel">body (EN)</label>
			<textarea className="formControl textarea" name="body_en" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body_en)} />
		</div>
		<div className="formContainer">
			<label className="formLabel">body (CN)</label>
			<textarea className="formControl textarea" name="body_cn" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body_cn)} />
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



// <div className="formContainer">
// 	<label className="formLabel">Sub-body</label>
// 	<textarea className="formControl textarea" name="subbody" onChange={(event) => props.handleChange(event)}  rows="3"/>
// </div>