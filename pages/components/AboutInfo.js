import Link from 'next/link'
import React, { Component } from "react";

const AboutInfo = ({ content }) => (
	<div className="aboutinfo clear">
		<div className="aboutbanner">
			<img src={content.banner} />
		</div>
		<div className="aboutbanner-mb">
			<img src={content.bannermb} />
		</div>
		<div className="container">
			<div className="aboutlogo">
				<img src={content.logo}/>
			</div>
			<div className="aboutcontent">
				<p>{content.text1}</p>
				<img src={content.image} />
				<div className="lastbox">
					<p>{content.text1}</p>
				</div>
			</div>
		</div>
	</div>
)

export { AboutInfo }