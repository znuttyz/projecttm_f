import Link from 'next/link'
import React, { Component } from "react";

const ContactInfo = () => (
	<div className="contactinfo clear">
		<div className="container">
			<ul>
				<li className="contact-address">
					<img src="/static/images/05-contact/line-addr.png"/>
					<h3>บริษัท เซ็น แอนด์ สไปซี่ จำกัด
						<span>782/1 ซอยอ่อนนุช 17 แขวงสวนหลวง<br/>เขตสวนหลวง กทม 10250<br/>Tel. 02-719-5000</span>
					</h3>
					<div className="ggmap" />
				</li>
				<li className="contact-form">
					<img src="/static/images/05-contact/line-cm.png"/>
					<form>
						<label for="topic">หัวข้อเรื่อง</label>
						<input type="text" name="topic" placeholder="หัวข้อเรื่อง" />

						<label for="name">ชื่อของท่าน</label>
						<input type="text" name="name" placeholder="ชื่อของท่าน" />

						<label for="email">อีเมล์ของท่าน</label>
						<input type="email" name="email" placeholder="อีเมล์ของท่าน" />

						<label for="phonenumber">เบอร์โทรศัพท์ของท่าน</label>
						<input type="text" name="phonenumber" placeholder="เบอร์โทรศัพท์ของท่าน" />

						<label for="content">เนื้อความ</label>
						<textarea type="text" placeholder="เนื้อความ"/>

						<button type="button" class="">รีเซ็ท</button>
      					<button type="submit" class="">ส่ง</button>
					</form>
				</li>
			</ul>
		</div>
	</div>
)

export { ContactInfo }