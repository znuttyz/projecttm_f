import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const JaewhonElement = () => (
	<div className="brands-element b-jaewhon clear">
		<div className="b-banner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-brands.png?alt=media&token=284db74b-0b05-41a4-b034-408be3c54fdd" />
		</div>
		<div className="b-banner-mb">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fbannerbrands-mb%20.png?alt=media&token=244828ef-a1a9-4238-b9d9-93da40d5203d" />
		</div>
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/brands/tummour"><a><img src="/static/images/00-global/tm.png"/></a></Link></li>
					<li><Link href="/brands/laoyuan"><a><img src="/static/images/00-global/ly.png"/></a></Link></li>
					<li><Link href="/brands/jaewhon"><a><img src="/static/images/00-global/jh.png"/></a></Link></li>
					<li><Link href="/brands/pho"><a><img src="/static/images/00-global/ph.png"/></a></Link></li>
					<li><Link href="/brands/granny"><a><img src="/static/images/00-global/ky.png"/></a></Link></li>
					<li><Link href="/brands/kruathai"><a><img src="/static/images/00-global/kt.png"/></a></Link></li>
					<li><Link href="/brands/detummour"><a><img src="/static/images/00-global/tm-en.png"/></a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
				<div className="detail-info">
					<div className="description">
		 				<img src="/static/images/03-brands/line-jh.png" className="b-logo" />
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
		 				<p>“แจ่วฮ้อน” ตามภาษาที่ชาวอีสานใช้เรียกอาหารประเภทสุกี้ลาว หรือจิ้มจุ่ม หมายถึงการนำน้ำซุป มาผสมกับแจ่ว ใส่ผัก และเนื้อสัตว์ลงไป
		 				ซึ่งตำมั่วได้นำมาประยุกต์ให้ถูกปากมากยิ่งขึ้นตามแบบฉบับอีสานแท้ๆ ถือเป็นเมนูอีสานที่มีความลงตัวทั้งรสชาติ จัดจ้าน เผ็ดร้อน เข้มข้น
		 				หอมกรุ่นสมุนไพร เหมาะสำหรับคนรักสุขภาพ และการล้อมวงทานกับเพื่อน และครอบครัว<br/><span>“แซ่บภูธร คักหลาย ไผก็มัก”</span></p>
		 			</div>
		 			<div className="btn-menu">
		 				<a href="/static/files/MENU_JEAWHON.pdf" target="_blank">ดูเมนู</a>
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
						      	<Tab>ต่างประเทศ</Tab>
						    </TabList>

						    <TabPanel>
						      	<ul>
						      		<li>
						      			<h4>บีไฮฟ์ เมืองทองธานี</h4>
						      			<p>โทร. 063-998-0885</p>
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
						      			<h4>มาบุญครองเซ็นเตอร์</h4>
						      			<p>โทร. 02-003-1689</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัลพลาซา ปิ่นเกล้า</h4>
						      			<p>โทร. 02-433-8474</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัลพลาซา แจ้งวัฒนะ</h4>
						      			<p>โทร. 02-193-8155</p>
						      		</li>
						      		<li>
						      			<h4>พระราม 2</h4>
						      			<p>โทร. 02-416-7313</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี นครปฐม</h4>
						      			<p>โทร. 034-300-993</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัล พลาซา เวสต์เกต</h4>
						      			<p>โทร. 02-194-2789</p>
						      		</li>
						      		<li>
						      			<h4>แฟชั่นไอซ์แลนด์</h4>
						      			<p>โทร. 02-041-9879</p>
						      		</li>
						      		<li>
						      			<h4>Paseo ลาดกระบัง</h4>
						      			<p>เร็วๆ นี้</p>
						      		</li>
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
							      	<li>
						      			<h4>เสริมไทยคอมเพล็กซ์ มหาสารคาม</h4>
						      			<p>โทร. 062-586-4256</p>
						      		</li>
					      		</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>โรบินสัน ชลบุรี</h4>
						      			<p>โทร. 038-459-286</p>
						      		</li>
						    	</ul>
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
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>เวียงจันทน์</h4>
						      			<p>เร็วๆ นี้</p>
						      		</li>
						    	</ul>
						    </TabPanel>
						</Tabs>
		 			</div>
		 		</div>
	 		</div>
	 	</div>
	</div>
)

export { JaewhonElement }