import Link from 'next/link'
import React, { Component } from "react";
import { GMap } from './'

const ContactInfo = ({ handleChange, onSubmit, error, content }) => (
	<div className="contactinfo clear">
		<div className="contactbanner">
			<img src={content.banner} />
		</div>
		<div className="contactbanner-mb">
			<img src={content.bannermb} />
		</div>
		<div className="container">
			<ul>
				<li className="contact-address">
					<img src={content.address.title} />
					<h3>{content.address.text}</h3>
					<div className="ggmap">
						<GMap 
							isMarkerShown 
							googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+process.env.GMAP_KEY}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `210px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</div>
				</li>
				<li className="contact-form">
					<img src={content.comment.title} />
					<form>
						<input type="text" name="topic" placeholder={content.comment.input1} onChange={(event) => handleChange(event)} required/>
						<br/>
						<input type="text" name="name" placeholder={content.comment.input2} onChange={(event) => handleChange(event)} required/>
						<br/>
						<input type="email" name="email" placeholder={content.comment.input3} onChange={(event) => handleChange(event)} required/>
						<br/>
						<input type="number" name="phone" placeholder={content.comment.input4} onChange={(event) => handleChange(event)} required/>
						<br/>
						<textarea type="text" placeholder={content.comment.input5} name="body" onChange={(event) => handleChange(event)} required/>
						<br/>
						{error && <p style={{color: 'red'}}>* Please fill in all form correctly</p>}
						<div className="contact-btn">
							<button type="reset" className="btn-reset">{content.comment.button1}</button>
      						<button type="submit" className="btn-submit" onClick={onSubmit}>{content.comment.button2}</button>
      					</div>
					</form>
				</li>
			</ul>
		</div>
	</div>
)

export { ContactInfo }