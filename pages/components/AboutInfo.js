import Link from 'next/link'
import React, { Component } from "react";

const AboutInfo = () => (
	<div className="aboutinfo clear">
		<div className="aboutbanner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-about.png?alt=media&token=aa6c33a8-47a1-4004-9b63-7d4befe7cd0d" />
		</div>
		<div className="container">
			<div className="aboutlogo">
				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm.png?alt=media&token=ac35c520-2402-422d-ba6b-c28a94eab001"/>
			</div>
			<div className="aboutcontent">
				<p>เรื่องราวของร้านอาหารไทยอีสาน ซึ่งถือกำเนิดมาเป็นเวลายาวนานตั้งแต่ปี 1989 ถูกปรับปรุง แปลงโฉม และสร้างแบรนด์จนกลายเป็นร้านที่ดูทันสมัย มีเอกลักษณ์ แต่ยังคงรสชาติความเป็นไทยแท้ ๆ เจ้าแรกในตลาดอาหารอีสาน โดยมีการวางจุดยืนของแบรนด์ไว้อย่างชัดเจน ภายใต้สโลแกนของร้านตำมั่ว คือ <span>“อาหารรสจัด ถนัดเรื่องตำ”</span> สานต่อความมุ่งมั่นที่จะพัฒนาอาหารไทยอย่างต่อเนื่องเพื่อให้เป็นที่ยอมรับของทั่วโลก ซึ่งปัจจุบันนี้มีกว่า 150 สาขาใน 4 ประเทศ</p>
				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F02-about%2F01.png?alt=media&token=5d6861a8-68d5-4347-b874-aa51e7a27f0d" />
				<div className="lastbox">
					<p>ที่กล่าวมานี้คือตำนานของต้นตำรับอาหารไทยอีสานแบบดั้งเดิม "ตำมั่ว" จนเริ่มต้นก่อตั้งภายใต้ชื่อ บริษัท Zen & Spicy จำกัด ที่ในปัจจุบันนี้ได้เซ็นสัญญาร่วมธุรกิจกับบริษัทเครือร้านอาหารยักษ์ใหญ่ บริษัทเซ็น คอปอร์เรชั่นกรุ๊ป จำกัดเมื่อปี 2016 กลายมาเป็น บริษัท เซ็นแอนด์สไปซี่ จำกัด ตั้งแต่นั้นเป็นต้นมา</p>
				</div>
			</div>
		</div>
	</div>
)

export { AboutInfo }