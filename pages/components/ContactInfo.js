import Link from 'next/link'
import React, { Component } from "react";
import { GMap } from './'

const ContactInfo = ({ handleChange, onSubmit}) => (
	<div className="contactinfo clear">
		<div className="container">
			<ul>
				<li className="contact-address">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fline-addr.png?alt=media&token=fac8fe87-e7fe-4722-9206-43aac695080d"/>
					<h3>บริษัท เซ็น แอนด์ สไปซี่ จำกัด<br/>
						<span>782/1 ซอยอ่อนนุช 17 แขวงสวนหลวง<br/>เขตสวนหลวง กทม 10250<br/>Tel. 02-719-5000</span>
					</h3>
					<div className="ggmap">
						<GMap 
							isMarkerShown 
							googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+process.env.GMAP_KEY}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</div>
				</li>
				<li className="contact-form">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F05-contact%2Fline-cm.png?alt=media&token=2ea11427-b667-41c0-bf1e-28fc3f0bd061"/>
					<form>
						<input type="text" name="topic" placeholder="หัวข้อเรื่อง" onChange={(event) => handleChange(event)} />
						<br/>
						<input type="text" name="name" placeholder="ชื่อของท่าน" onChange={(event) => handleChange(event)} />
						<br/>
						<input type="email" name="email" placeholder="อีเมล์ของท่าน" onChange={(event) => handleChange(event)} />
						<br/>
						<input type="number" name="phonenumber" placeholder="เบอร์โทรศัพท์ของท่าน" onChange={(event) => handleChange(event)} />
						<br/>
						<textarea type="text" placeholder="เนื้อความ" name="body" onChange={(event) => handleChange(event)} />
						<br/>
						<div className="contact-btn">
							<button type="reset" className="btn-reset">รีเซ็ท</button>
      						<button type="submit" className="btn-submit" onClick={onSubmit}>ส่ง</button>
      					</div>
					</form>
				</li>
			</ul>
		</div>
	</div>
)

export { ContactInfo }