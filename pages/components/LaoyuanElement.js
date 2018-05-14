import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const LaoyuanElement = () => (
	<div className="brands-element b-laoyuan clear">
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/brands/tummour"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm.png?alt=media&token=ac35c520-2402-422d-ba6b-c28a94eab001"/></a></Link></li>
					<li><Link href="/brands/laoyuan"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fly.png?alt=media&token=86762e41-6548-406f-b754-93171fd039dd"/></a></Link></li>
					<li><Link href="/brands/jaewhon"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fjh.png?alt=media&token=45764deb-998b-4ca7-82d7-d0881cfc2e5c"/></a></Link></li>
					<li><Link href="/brands/pho"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fph.png?alt=media&token=8e38d452-66c5-4967-b04a-c2be46cc621a"/></a></Link></li>
					<li><Link href="/brands/granny"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fky.png?alt=media&token=34c5eda3-6228-4d36-ae5a-f8a2a2244810"/></a></Link></li>
					<li><Link href="/brands/kruathai"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fkt.png?alt=media&token=033ad41b-3471-4c55-ac98-634244efc605"/></a></Link></li>
					<li><Link href="/brands/detummour"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm-en.png?alt=media&token=c1e9d722-bdb4-4534-8d99-28433b19b09f"/></a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
				<div className="description">
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-ly.png?alt=media&token=f0d794dc-1da8-4445-bce2-8bfe5e0afe0f" className="b-logo" />
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
	 				<p>วิถีการกินอยู่ของชาวญวน (เวียดนาม) ที่ย้ายถิ่นฐานมาอาศัยอยู่ในประเทศไทยแถบลุ่มแม่น้ำโขง จนกลายมาเป็นกลุ่มชนชั้นนาของจังหวัดนครพนม
	 				จากเดิมเรียกว่า “ไทยใหม่ – นครพนม” เวียดนามย้ายถิ่นกลุ่มนี้ได้กลายมาเป็นกลุ่มคนที่มีสถานะ และความสำคัญต่อเศรษฐกิจ สังคม
	 				ของจังหวัดทางภาคอีสานอีกด้วย นอกจากนี้กลุ่มคนเหล่านี้ยังได้สร้าง“วัฒนธรรมแบบเวียดนาม” ผ่านสถานที่ต่างๆ เช่น บ้านโฮจิมินห์
	 				หอนาฬิกาเวียดนามอนุสรณ์ เชื่อมโยงกับวิถีชีวิต และที่ขาดไม่ได้คือวัฒนธรรมการประกอบอาหารของชาวเวียดนามแบบต้นตำรับ
	 				เหมือนทานที่บ้านเกิดของพวกเขาเอง ทั้งหมูยอญวน แหนมเนือง และเมนูอื่นๆ จนถ่ายทอดมารุ่นสู่รุ่น และนี่คือคุณค่าความเป็น “ลาว-ญวน บาย ตำมั่ว”
	 				เจ้าของสูตรการผสมผสานเมนูอาหารระหว่างสองสัญชาติจากสองต้นตำรับแท้ๆ</p>
	 			</div>
	 			<div className="btn-menu">
	 				<Link href=""><a>ดูเมนู</a></Link>
	 			</div>
	 			<div className="branches">
	 				<Tabs>
					    <TabList>
					      	<Tab>ภาคกลาง</Tab>
					      	<Tab>ภาคอีสาน</Tab>
					      	<Tab>ภาคตะวันออก</Tab>
					      	<Tab>ภาคตะวันตก</Tab>
					      	<Tab>ภาคเหนือ</Tab>
					      	<Tab>ภาคใต้</Tab>
					    </TabList>

					    <TabPanel>
					      	<ul>
					      		<li>
					      			<h4>เซ็นทรัลพลาซา บางนา</h4>
					      			<p>โทร. 02-102-0169</p>
					      		</li>
					      		<li>
					      			<h4>เซ็นทรัลพลาซา พิษณุโลก</h4>
					      			<p>โทร. 055-338-468</p>
					      		</li>
					      		<li>
					      			<h4>เซ็นทรัลพลาซา มหาชัย</h4>
					      			<p>โทร. 034-466-833</p>
					      		</li>
					      		<li>
					      			<h4>เซ็นทรัลพลาซา เวสต์เกต</h4>
					      			<p>โทร. 093-464-1662</p>
					      		</li>
					      		<li>
					      			<h4>เซ็นทรัลพลาซา ศาลายา</h4>
					      			<p>โทร. 02-164-0109</p>
					      		</li>
					      		<li>
					      			<h4>เดอะมอลล์ บางแค</h4>
					      			<p>โทร. 02-454-3201,086-449-6142</p>
					      		</li>
					      		<li>
					      			<h4>ซีคอนสแควร์</h4>
					      			<p>โทร. 064-657-4596</p>
					      		</li>
					      		<li>
					      			<h4>พรอมานาด รามอินทรา</h4>
					      			<p>โทร. 02-014-4141</p>
					      		</li>
					      		<li>
					      			<h4>ฟิวเจอร์ พาร์ค รังสิต</h4>
					      			<p>โทร. 085-186-8855</p>
					      		</li>
					      		<li>
					      			<h4>วิภาวดี 64</h4>
					      			<p>โทร. 02-058-6055,095-460-8028</p>
					      		</li>
					      		<li>
					      			<h4>อยุธยา พาร์ค</h4>
					      			<p>โทร. 065-265-4935, 035-801-122</p>
					      		</li>
					      		<li>
					      			<h4>เทสโก้ โลตัส จรัญสนิทวงศ์</h4>
					      			<p>โทร. 098-275-5963</p>
					      		</li>
					      	</ul>
					    </TabPanel>
					    <TabPanel>
					      	&nbsp;
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>เซ็นทรัลพลาซา ชลบุรี</h4>
					      			<p>โทร. 098-407-1718</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>บลูพอร์ต หัวหิน</h4>
					      			<p>โทร. 032-908164,092-8106169</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>เซ็นทรัลเฟสติวัล เชียงใหม่</h4>
					      			<p>โทร. 053-288-983</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>เซนทรัลพลาซา นครศรีธรรมราช</h4>
					      			<p>โทร. 092-4151440,<br/>075-803115, 084-749-9805</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					</Tabs>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { LaoyuanElement }