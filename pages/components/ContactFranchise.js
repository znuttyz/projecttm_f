import Link from 'next/link'
import React, { Component } from "react";

const ContactFranchise = () => (
	<div className="contactfranchise clear">
		<div className="container">
			<img src="/static/images/05-contact/line-fc.png" />
			<h1>สอบถามได้ที่เบอร์โทร 063-2028752-5</h1>
			<Link href=""><a>คุณสมบัติเฟรนไชส์</a></Link>
			<Link href=""><a>คุณสมบัติเฟรนไชส์</a></Link>
			<h2>หากกรอกข้อมูลในใบสมัครครบถ้วน กรุณาส่งกลับมาที่ franchisebusiness.div@zengroup.co.th</h2>
		</div>
	</div>
)

export { ContactFranchise }