import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const DetummourElement = () => (
	<div className="brands-element b-detummour clear">
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
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-de.png?alt=media&token=1faedc30-f77a-43d7-821c-667baf0ffc20" className="b-logo" />
		 				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fline-horizon.png?alt=media&token=2008b37c-b255-4c02-a4c6-888c560fe437" className="b-line" />
		 				<p>	De Tummour ร้านอาหารอีสานต้นตำรับระดับพรีเมียม โดดเด่นในเรื่องเอกลักษณ์ของรสชาติ ที่เข้าใจรสนิยมถึงความต้องการทั้งคนไทย และชาวต่างชาติให้ได้ลิ้มรสความอร่อยในแบบรสชาติแท้ๆของความเป็นไทย</p>
		 			</div>
		 			<div className="btn-menu">
		 				<Link href=""><a>ดูเมนู</a></Link>
		 			</div>
		 			<div className="branches">
		 				<Tabs>
						    <TabList>
						      	<Tab>ภาคกลาง</Tab>
						    </TabList>

						    <TabPanel>
						      	<ul>
						      		<li>
						      			<h4>เกษร วิลเลจ</h4>
						      			<p>โทร. 02-253-8328</p>
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

export { DetummourElement }