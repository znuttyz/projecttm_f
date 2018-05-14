import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const GrannyElement = () => (
	<div className="brands-element b-granny clear">
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
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-ky.png?alt=media&token=36ec4928-efc4-4e08-99f0-e3840b84f7ab" className="b-logo" />
	 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
	 				<p>“น้ำจิ้มรสเด็ดสะใจ กับไก่เต็มคำ” “จัดจ้าน หอมนุ่ม ชุ่มไก่” สโลแกนสั้นๆง่ายๆ ที่ยังคงความเป็นเอกลักษณ์ นั่นคือ น้ำจิ้มรสจัดจ้าน ตามสไตล์ตำมั่ว เสริ์ฟพร้อมข้าวหอมมะลิที่หุงจนนุ่มน่ารับประทาน ทานคู่กับไก่ต้มจนนุ่มชุ่มฉ่ำ 
	 				นอกจากข้าวมันไก่แล้ว ยังมีเมนูข้าวอีกหลายเมนู เช่น ข้าวมันไก่ มันไก่ต้ม, ข้าวมันไก่ทอด และข้าวมันไก่แซ่บ และยังมีอาหารอื่นๆ บริการอีก อาทิ คะน้าผัดน้ำผัดน้ำมันหอย , เกี๊ยวทอด, ก๊วยเตี๊ยวลุยสวน เป็นต้น ภายใต้บรรรยากาศอันอบอุ่นเป็นกันเอง เหมือนทาวข้าวในบ้าน</p>
	 			</div>
	 			<div className="btn-menu">
	 				<Link href=""><a>ดูเมนู</a></Link>
	 			</div>
	 			<div className="branches">
	 				<Tabs>
					    <TabList>
					      	<Tab>ภาคอีสาน</Tab>
					    </TabList>

					    <TabPanel>
					      	<ul>
					      		<li>
					      			<h4>ปตท. บ้านกรวด บุรีรัมย์</h4>
					      			<p>โทร. 095-216-6951</p>
					      		</li>
					      	</ul>
					    </TabPanel>
					</Tabs>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { GrannyElement }