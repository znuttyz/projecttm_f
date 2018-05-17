import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TummourElement = () => (
	<div className="brands-element b-tummour clear">
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
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-tm.png?alt=media&token=fb29474d-a0ee-4673-abb1-2d702ec3c651" className="b-logo" />
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
		 				<p>ตำมั่ว ส้มตำพันล้านจากประสบการณ์ผู้นำด้านอาหารไทย เจ้าของสโลแกน <span>“อาหารรสจัด ถนัดเรื่องตำ”</span> อาหารรสชาติจัดจ้านเข้มข้นที่คนไทยตามหา หยิบยกทุกเมนูรสชาติแซ่บจัดจ้านอีสานแท้ และไทยแท้สูตรคุณแม่น้อยตำนานความอร่อยกว่า 30 ปี
		 				สู่มาตรฐานแห่งรสชาติความอร่อยรสจัดจ้านไม่ออมมือ เพื่อลูกค้าที่รักในรสชาติจัดจ้าน ทุกอย่างภายใต้ตำมั่วต้องดีที่สุด ทำให้เราประสบความสำเร็จ
		 				จนขยายสาขากว่า 100 สาขา ทั้งในประเทศและต่างประเทศ และมองหาโอกาสที่จะต่อยอดความอร่อยอาหารไทยเพิ่มขึ้นอย่างไม่หยุดนิ่ง
		 				เพื่อตอบสนองความต้องการของผู้บริโภคในหลากหลายประเภท</p>
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
						      			<h4>Paseo กาญจนาภิเษก</h4>
						      			<p>โทร. 02-111-3949</p>
						      		</li>
						      		<li>
						      			<h4>RCA</h4>
						      			<p>โทร. 02-067-6446</p>
						      		</li>
						      		<li>
						      			<h4>THE STREET รัชดา (ตำมั่ว+เฝอ)</h4>
						      			<p>โทร. 086-340-2937</p>
						      		</li>
						      		<li>
						      			<h4>Zpell Future Park Rangsit</h4>
						      			<p>โทร. 093-464-1662</p>
						      		</li>
						      		<li>
						      			<h4>คลองหลวง</h4>
						      			<p>โทร. 082-998-8529</p>
						      		</li>
						      		<li>
						      			<h4>ซอยนราธิวาส</h4>
						      			<p>โทร. 02-286-3934</p>
						      		</li>
						      		<li>
						      			<h4>ซีคอนสแควร์</h4>
						      			<p>โทร. 064-657-4596</p>
						      		</li>
						      		<li>
						      			<h4>เซียร์ รังสิต</h4>
						      			<p>โทร. 098-858-7895,061-512-4369</p>
						      		</li>
						      		<li>
						      			<h4>เดอะมอลล์ งามวงศ์วาน</h4>
						      			<p>โทร. 081-999-2573</p>
						      		</li>
						      		<li>
						      			<h4>เดอะมอลล์ บางกะปิ</h4>
						      			<p>โทร. 082-998-8529</p>
						      		</li>
						      		<li>
						      			<h4>เดอะวอล์ค นครสวรรค์</h4>
						      			<p>โทร. 093-983-1802</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส จรัญสนิทวงศ์</h4>
						      			<p>โทร. 098-275-5963</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส พระราม 1</h4>
						      			<p>โทร. 02-612-4038</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส พิษณุโลก</h4>
						      			<p>โทร. 084-153-0007</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส ศรีนครินทร์</h4>
						      			<p>โทร. 085-835-3438</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส ศาลายา</h4>
						      			<p>โทร. 081-193-8830</p>
						      		</li>
						      		<li>
						      			<h4>นวลจันทร์</h4>
						      			<p>โทร. 02-184-2816</p>
						      		</li>
						      		<li>
						      			<h4>บางบัวทอง</h4>
						      			<p>โทร. 02-571-2904,084-087-9889</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี บางพลี</h4>
						      			<p>โทร. 092-856-6459</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี พิษณุโลก</h4>
						      			<p>โทร. 093-983-1801</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี มหาชัย</h4>
						      			<p>โทร. 092-267-4844</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี ลพบุรี</h4>
						      			<p>โทร. 036-784-376</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี สุขสวัสดิ์</h4>
						      			<p>โทร. 02-463-9322,090-812-6931</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี สุโขทัย</h4>
						      			<p>โทร. 055-010-311</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี อ้อมใหญ่</h4>
						      			<p>โทร. 0-2420-7223</p>
						      		</li>
						      		<li>
						      			<h4>พระราม 9 (ซอย 51)</h4>
						      			<p>โทร. 02-000-2881</p>
						      		</li>
						      		<li>
						      			<h4>พลัสมอลล์ พระราม 5</h4>
						      			<p>โทร. 02-067-7878</p>
						      		</li>
						      		<li>
						      			<h4>พิจิตร Happy Plaza</h4>
						      			<p>โทร. 098-753-0119</p>
						      		</li>
						      		<li>
						      			<h4>เพชรเกษม พาวเวอร์เซ็นเตอร์</h4>
						      			<p>โทร. 02-421-5300</p>
						      		</li>
						      		<li>
						      			<h4>แพลทินั่ม ประตูน้ำ</h4>
						      			<p>โทร. 062-581-3401</p>
						      		</li>
						      		<li>
						      			<h4>มาร์เก็ตวิลเลจ สุวรรณภูมิ</h4>
						      			<p>โทร. 098-8247364</p>
						      		</li>
						      		<li>
						      			<h4>ตำมั่ว Express - CP TOWER</h4>
						      			<p>โทร. 02-638-3278,097-132-3035</p>
						      		</li>
						      		<li>
						      			<h4>ตำมั่ว Express - Summer Hill</h4>
						      			<p>โทร. 097-160-3797, 02-048-6945</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน กำแพงเพชร</h4>
						      			<p>โทร. 055-867-230</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน ลพบุรี</h4>
						      			<p>โทร. 036-687-781</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน สมุทรปราการ</h4>
						      			<p>โทร. 02-174-2827,080-161-0820</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน สระบุรี</h4>
						      			<p>โทร. 036-351-574</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน สุพรรณบุรี</h4>
						      			<p>โทร. 035-528-246</p>
						      		</li>
						      		<li>
						      			<h4>ลาดกระบัง (หน้านิคมฯลาดกระบัง)</h4>
						      			<p>โทร. 098-825-8547</p>
						      		</li>
						      		<li>
						      			<h4>วังหลัง (ศิริราช)</h4>
						      			<p>โทร. 02-409-5209</p>
						      		</li>
						      		<li>
						      			<h4>วีสแควร์ นครสวรรค์</h4>
						      			<p>โทร. 099-861-0569</p>
						      		</li>
						      		<li>
						      			<h4>สายไหม</h4>
						      			<p>โทร. 02-991-3540</p>
						      		</li>
						      		<li>
						      			<h4>สุขาภิบาล 3</h4>
						      			<p>โทร. 086-340-2937</p>
						      		</li>
						      		<li>
						      			<h4>สุพรรณบุรี</h4>
						      			<p>โทร. 093-464-1662</p>
						      		</li>
						      		<li>
						      			<h4>อาคาร GMM Grammy</h4>
						      			<p>โทร. 02-258-1706</p>
						      		</li>
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						      	<ul>
						      		<li>
						      			<h4>BRY บุรีรัมย์</h4>
						      			<p>โทร. 044-617761</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัล พลาซา ขอนแก่น</h4>
						      			<p>โทร. 083-358-5775</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัล พลาซา อุบลราชธานี</h4>
						      			<p>โทร. 086-340-2937</p>
						      		</li>
						      		<li>
						      			<h4>เดอะมอลล์โคราช</h4>
						      			<p>โทร. 095-650-9181</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี นครพนม</h4>
						      			<p>โทร. 042-532744</p>
						      		</li>
						      		<li>
						      			<h4>ซอยนราธิวาส</h4>
						      			<p>โทร. 02-286-3934</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี อรัญประเทศ</h4>
						      			<p>โทร. 086-340-2937</p>
						      		</li>
						      		<li>
						      			<h4>ปตท. นางรอง</h4>
						      			<p>โทร. 086-268-0444</p>
						      		</li>
						      		<li>
						      			<h4>ปตท. โนนดินแดง</h4>
						      			<p>โทร. 086-875-0777</p>
						      		</li>
						      		<li>
						      			<h4>ปตท. ลำปลายมาศ</h4>
						      			<p>โทร. 086-259-7299</p>
						      		</li>
						      		<li>
						      			<h4>ปตท. สกลนคร</h4>
						      			<p>โทร. 098-979-7397</p>
						      		</li>
						      		<li>
						      			<h4>ปตท. สินชัยกาญจน์ ศีขรภูมิ</h4>
						      			<p>โทร. 044-560-123</p>
						      		</li>
						      		<li>
						      			<h4>ประโคนชัย บุรีรัมย์</h4>
						      			<p>โทร. 098-102-7606</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน บุรีรัมย์</h4>
						      			<p>โทร. 044-600-665</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส ศรีนครินทร์</h4>
						      			<p>โทร. 085-835-3438</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน มุกดาหาร</h4>
						      			<p>โทร. 083-094-2926</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน ร้อยเอ็ด</h4>
						      			<p>โทร. 02-184-2816</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน สุรินทร์</h4>
						      			<p>โทร. 092-265-1188</p>
						      		</li>
						      		<li>
						      			<h4>เสริมไทย คอมเพล็กซ์ มหาสารคาม</h4>
						      			<p>โทร. 062-586-4256</p>
						      		</li>
						      		<li>
						      			<h4>หนองคาย</h4>
						      			<p>โทร. 095-635-4053</p>
						      		</li>
						      	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>CK Plaza ปลวกแดง</h4>
						      			<p>โทร. 038-016-297</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส บ่อวิน</h4>
						      			<p>โทร. 038-111-722</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส ระยอง</h4>
						      			<p>โทร. 038-622-515</p>
						      		</li>
						      		<li>
						      			<h4>แปซิฟิกพาร์ค ศรีราชา</h4>
						      			<p>โทร. 098-178-0778</p>
						      		</li>
						      		<li>
						      			<h4>พลัสมอลล์ อมตะนคร</h4>
						      			<p>โทร. 082-406-6323</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน จันทบุรี</h4>
						      			<p>โทร. 062-598-1698</p>
						      		</li>
						      		<li>
						      			<h4>ซีคอนสแควร์</h4>
						      			<p>โทร. 064-657-4596</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน ปราจีนบุรี</h4>
						      			<p>โทร. 094-553-1108</p>
						      		</li>
						      		<li>
						      			<h4>แหลมทอง บางแสน ชลบุรี</h4>
						      			<p>โทร. 099-953-4553</p>
						      		</li>
						      		<li>
						      			<h4>ฮาร์เบอร์ พัทยา</h4>
						      			<p>โทร. 098-272-8523</p>
						      		</li>
						      		<li>
						      			<h4>ฮาร์เบอร์ มอลล์ แหลมฉบัง</h4>
						      			<p>โทร. 096-112-3800</p>
						      		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>บิ๊กซี กาญจนบุรี</h4>
						      			<p>โทร. 086-029-1150</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน แม่สอด</h4>
						      			<p>โทร. 095-134-6930</p>
						      		</li>
						      		<li>
						      			<h4>โรบินสัน ราชบุรี</h4>
						      			<p>โทร. 032-910-322</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี กำแพงเพชร</h4>
						      			<p>โทร. 055-741-680</p>
						      		</li>
						      		<li>
						      			<h4>มาร์เกต วิลเลจ หัวหิน</h4>
						      			<p>โทร. 032-526-090</p>
						      		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>MAYA เชียงใหม่</h4>
						      			<p>โทร. 052-081-105</p>
						      		</li>
						      		<li>
						      			<h4>Tops Plaza พะเยา</h4>
						      			<p>โทร. 054-870-599</p>
						      		</li>
						      		<li>
						      			<h4>เซ็นทรัลพลาซา เชียงราย</h4>
						      			<p>โทร. 053-179-754</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส เชียงใหม่ (กาดรวมโชค)</h4>
						      			<p>โทร. 081-043-6648</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี เชียงราย</h4>
						      			<p>โทร. 095-693-6481</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี ลำปาง</h4>
						      			<p>โทร. 054-209-843</p>
						      		</li>
						      		<li>
						      			<h4>ศรีพงษ์พาร์ค อุตรดิตถ์</h4>
						      			<p>โทร. 055-479-959</p>
						      		</li>
						    	</ul>
						    </TabPanel>
						    <TabPanel>
						    	<ul>
						    		<li>
						      			<h4>เทสโก้ โลตัส นครศรีฯ</h4>
						      			<p>โทร. 099-857-2746</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัส หาดใหญ่</h4>
						      			<p>โทร. 086-340-2937</p>
						      		</li>
						      		<li>
						      			<h4>เทสโก้ โลตัสพัทลุง</h4>
						      			<p>โทร. 074-606-588</p>
						      		</li>
						      		<li>
						      			<h4>บิ๊กซี สุราษฎร์ธานี</h4>
						      			<p>โทร. 077-951-668</p>
						      		</li>
						      		<li>
						      			<h4>ภูเก็ต 2</h4>
						      			<p>โทร. 076–212-701</p>
						      		</li>
						      		<li>
						      			<h4>โลตัส สงขลา</h4>
						      			<p>โทร. 086-604-8164</p>
						      		</li>
						      		<li>
						      			<h4>สหไทยพลาซ่า ทุ่งสง</h4>
						      			<p>โทร. 075-423-789</p>
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

export { TummourElement }

// <ul>
// 	<li><Link href="/brands/tummour"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm.png?alt=media&token=ac35c520-2402-422d-ba6b-c28a94eab001"/></a></Link></li>
// 	<li><Link href="/brands/laoyuan"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fly.png?alt=media&token=86762e41-6548-406f-b754-93171fd039dd"/></a></Link></li>
// 	<li><Link href="/brands/jaewhon"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fjh.png?alt=media&token=45764deb-998b-4ca7-82d7-d0881cfc2e5c"/></a></Link></li>
// 	<li><Link href="/brands/pho"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fph.png?alt=media&token=8e38d452-66c5-4967-b04a-c2be46cc621a"/></a></Link></li>
// 	<li><Link href="/brands/granny"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fky.png?alt=media&token=34c5eda3-6228-4d36-ae5a-f8a2a2244810"/></a></Link></li>
// 	<li><Link href="/brands/kruathai"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fkt.png?alt=media&token=033ad41b-3471-4c55-ac98-634244efc605"/></a></Link></li>
// 	<li><Link href="/brands/detummour"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm-en.png?alt=media&token=c1e9d722-bdb4-4534-8d99-28433b19b09f"/></a></Link></li>
// </ul>