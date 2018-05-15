import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const JaewhonElement = () => (
	<div className="brands-element b-jaewhon clear">
		<div className="b-banner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-brands.png?alt=media&token=284db74b-0b05-41a4-b034-408be3c54fdd" />
		</div>
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
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-jh.png?alt=media&token=1a155bcd-6108-4dcc-8c9a-19127edfb3ac" className="b-logo" />
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
	 				<p>“แจ่วฮ้อน” ตามภาษาที่ชาวอีสานใช้เรียกอาหารประเภทสุกี้ลาว หรือจิ้มจุ่ม หมายถึงการนำน้ำซุป มาผสมกับแจ่ว ใส่ผัก และเนื้อสัตว์ลงไป
	 				ซึ่งตำมั่วได้นำมาประยุกต์ให้ถูกปากมากยิ่งขึ้นตามแบบฉบับอีสานแท้ๆ ถือเป็นเมนูอีสานที่มีความลงตัวทั้งรสชาติ จัดจ้าน เผ็ดร้อน เข้มข้น
	 				หอมกรุ่นสมุนไพร เหมาะสำหรับคนรักสุขภาพ และการล้อมวงทานกับเพื่อน และครอบครัว<br/><span>“แซ่บภูธร คักหลาย ไผก็มัก”</span></p>
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
					      			<h4>บีไฮฟ์ เมืองทองธานี</h4>
					      			<p>โทร. 085-478-7844</p>
					      		</li>
					      		<li>
					      			<h4>เพลินนารี่ มอลล์</h4>
					      			<p>โทร. 02-136-8046</p>
					      		</li>
					      		<li>
					      			<h4>โรบินสัน สระบุรี</h4>
					      			<p>โทร. 036-351-364</p>
					      		</li>
					      		<li>
					      			<h4>เสริมไทยคอมเพล็กซ์ มหาสารคาม</h4>
					      			<p>โทร. 062-586-4256</p>
					      		</li>
					      		<li>
					      			<h4>อิมพีเรียล สำโรง</h4>
					      			<p>โทร. 02-1830718</p>
					      		</li>
					      	</ul>
					    </TabPanel>
					    <TabPanel>
					      	<p>เร็วๆ นี้...</p>
					    </TabPanel>
					    <TabPanel>
					    	<p>เร็วๆ นี้...</p>
					    </TabPanel>
					    <TabPanel>
					    	<p>เร็วๆ นี้...</p>
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>เซ็นทรัลเฟสติวัล เชียงใหม่</h4>
					      			<p>โทร. 053-288-954</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					    <TabPanel>
					    	<ul>
					    		<li>
					      			<h4>เซ็นทรัลเฟสติวัล หาดใหญ่</h4>
					      			<p>โทร. 074-339-779</p>
					      		</li>
					      		<li>
					      			<h4>ภูเก็ต</h4>
					      			<p>โทร. 076-212-701</p>
					      		</li>
					    	</ul>
					    </TabPanel>
					</Tabs>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { JaewhonElement }