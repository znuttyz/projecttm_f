import Link from 'next/link'
import React, { Component } from "react";

const ContactFranchise = () => (
	<div className="contactfranchise clear">
		<div className="container">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fline-fc.png?alt=media&token=42561400-5179-46a6-adc2-1ede152cc1c1" />
			<h1>สอบถามได้ที่เบอร์โทร 063-2028752-5</h1>
			<div className="franchise-btn">
				<Link href=""><a>คุณสมบัติเฟรนไชส์</a></Link>
				<Link href=""><a>คุณสมบัติเฟรนไชส์</a></Link>
			</div>
			<h2>หากกรอกข้อมูลในใบสมัครครบถ้วน กรุณาส่งกลับมาที่ franchisebusiness.div@zengroup.co.th</h2>
		</div>
	</div>
)

export { ContactFranchise }