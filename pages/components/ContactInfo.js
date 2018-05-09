import Link from 'next/link'
import React, { Component } from "react";

const ContactInfo = () => (
	<div className="contactinfo clear">
		<div className="container">
			<ul>
				<li className="contact-address">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fline-addr.png?alt=media&token=fac8fe87-e7fe-4722-9206-43aac695080d"/>
					<h3>บริษัท เซ็น แอนด์ สไปซี่ จำกัด<br/>
						<span>782/1 ซอยอ่อนนุช 17 แขวงสวนหลวง<br/>เขตสวนหลวง กทม 10250<br/>Tel. 02-719-5000</span>
					</h3>
					<div className="ggmap" />
				</li>
				<li className="contact-form">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fline-cm.png?alt=media&token=2ea11427-b667-41c0-bf1e-28fc3f0bd061"/>
					<form>
						<input type="text" name="topic" placeholder="หัวข้อเรื่อง" />
						<br/>
						<input type="text" name="name" placeholder="ชื่อของท่าน" />
						<br/>
						<input type="email" name="email" placeholder="อีเมล์ของท่าน" />
						<br/>
						<input type="number" name="phonenumber" placeholder="เบอร์โทรศัพท์ของท่าน" />
						<br/>
						<textarea type="text" placeholder="เนื้อความ"/>
						<br/>
						<div className="contact-btn">
							<button type="button" className="btn-reset">รีเซ็ท</button>
      						<button type="submit" className="btn-submit">ส่ง</button>
      					</div>
					</form>
				</li>
			</ul>
		</div>
	</div>
)

export { ContactInfo }