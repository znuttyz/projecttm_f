import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const PhoElement = () => (
	<div className="brands-element b-pho clear">
		<div className="b-banner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-brands.png?alt=media&token=284db74b-0b05-41a4-b034-408be3c54fdd" />
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
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-ph.png?alt=media&token=397d7f7a-1a5a-44ba-b4e1-3cf2b2d5a123" className="b-logo" />
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
		 				<p>เฝอ คือก๋วยเตี๋ยวสไตล์เวียดนาม ในแบบฉบับของตำมั่วนั้น เราเน้นเรื่องรสชาติที่กลมกล่อม ปรุงรสให้ถูกปากคนไทย โดยเน้นหนักไปที่เครื่อง ทั้งหมู เนื้อ เครื่องใน ไข่เยิ้ม  เสิร์ฟพร้อมน้ำจิ้มที่ใช้เฉพาะทานกับเฝอ ทานเคียงกับพริกจี่ (พริกหนุ่มลนไฟ) และผักสดอีกมากมายให้คุณได้ครบทุกรสชาติ</p>
		 				<p>เมนูแนะนำได้แก่ เฝอแห้งหมู เฝอมาม่าไข่เยิ้ม เฝอเนื้อน้ำ เส้นหมี่หมูย่าง ปอเปี๊ยะสด หมูยอทอด ตบท้ายด้วยขนมถ้วย และของหวานเย็นชื่นใจ สูตรเฉพาะของ "เฝอ บายตำมั่ว" เท่านั้น
		 				การตกแต่งภายในร้าน เราเน้นให้ลูกค้ารู้สึกสบายตา ด้วยภาพเพ้นท์ผนังแบบร่วมสมัย แต่ยังคงกลิ่นอายวิถีชีวิตของชาวเวียดนาม</p>
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
						      			<p>โทร. 063-858-2888</p>
						      		</li>
						      		<li>
						      			<h4>ฟิวเจอร์ พาร์ค รังสิต</h4>
						      			<p>โทร. 087-979-8768</p>
						      		</li>
						      		<li>
						      			<h4>THE STREET รัชดา (ตำมั่ว+เฝอ)</h4>
						      			<p>โทร. 02-121-1832, 098-257-7693</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส ศรีนครินทร์</h4>
						      			<p>โทร. 02-759-8086</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน ศรีสมาน</h4>
						      			<p>โทร. 02-501-5806, 063-227-3907</p>
						      		</li>
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						      	<ul>
						    		<li>
						    			<h4>ปตท.สกลนคร</h4>
						    			<p>โทร. 098-979-7397</p>
						    		</li>
						    		<li>
						    			<h4>ปตท. นางรอง</h4>
						    			<p>โทร. 088-580-7649</p>
						    		</li>
						    		<li>
						    			<h4>ปตท.สุรินทร์</h4>
						    			<p>โทร. 084-6171-444</p>
						    		</li>
						    		<li>
						    			<h4>ปตท.โกสุมพิสัย</h4>
						    			<p>โทร. 043-706-548</p>
						    		</li>
						    		<li>
						    			<h4>ปตท. สินชัยกาญจน์ ศีขรภูมิ</h4>
						    			<p>โทร. 044-560-123</p>
						    		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						    			<h4>พลัสมอลล์ อมตะนคร</h4>
						    			<p>โทร. 092-252-9085</p>
						    		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
							    <ul>
							    	<li>
						      			<h4>บลูพอร์ต หัวหิน</h4>
						      			<p>โทร. 093-429-6296</p>
						      		</li>
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>MAYA เชียงใหม่</h4>
						      			<p>โทร. 052-081-105</p>
						      		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<p>เร็วๆ นี้...</p>
						    </TabPanel>
						</Tabs>
		 			</div>
		 		</div>
	 		</div>
	 	</div>
	</div>
)

export { PhoElement }