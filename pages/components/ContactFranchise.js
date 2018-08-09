import React, { Component } from "react";

const ContactFranchise = ({ content }) => (
	<div className="contactfranchise clear">
		<div className="container">
			<img src={content.franchise.title} />
			<h1>{content.franchise.tel}</h1>
			<div className="franchise-btn">
				<a href={content.franchise.button1_url} target="_blank">{content.franchise.button1}</a>
				<a href={content.franchise.button2_url} target="_blank">{content.franchise.button2}</a>
			</div>
			<h2>{content.franchise.text}</h2>
		</div>
	</div>
)

export { ContactFranchise }