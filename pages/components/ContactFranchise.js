import Link from 'next/link'
import React, { Component } from "react";

const ContactFranchise = ({ content }) => (
	<div className="contactfranchise clear">
		<div className="container">
			<img src={content.franchise.title} />
			<h1>{content.franchise.tel}</h1>
			<div className="franchise-btn">
				<Link href=""><a>{content.franchise.button1}</a></Link>
				<Link href=""><a>{content.franchise.button2}</a></Link>
			</div>
			<h2>{content.franchise.text}</h2>
		</div>
	</div>
)

export { ContactFranchise }