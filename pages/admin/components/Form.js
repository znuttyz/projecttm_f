const news = (props) => (
	<div>
		<div className="formContainer">
			<label className="formLabel">Title</label>
			<input type="text" className="formControl" name="title" onChange={(event) => props.handleChange(event)} disabled={props.isDisable} value={(props.data && props.data.title)}  />
		</div>
		<div className="formContainer">
			<label className="formLabel">Sub-body</label>
			<textarea className="formControl textarea" name="subbody" onChange={(event) => props.handleChange(event)}  rows="3" disabled={props.isDisable} value={(props.data && props.data.subbody)}/>
		</div>
		<div className="formContainer">
			<label className="formLabel">body</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body)}/>
		</div>

 		

	</div>
)

const promotion = (props) => (
	<div>
		<div className="formContainer">
			<label className="formLabel">Name</label>
			<input type="text" className="formControl" name="title" onChange={(event) => props.handleChange(event)}  disabled={props.isDisable} value={(props.data && props.data.title)} />
		</div>
		<div className="formContainer">
			<label className="formLabel">body</label>
			<textarea className="formControl textarea" name="body" onChange={(event) => props.handleChange(event)}  rows="5" disabled={props.isDisable} value={(props.data && props.data.body)} />
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