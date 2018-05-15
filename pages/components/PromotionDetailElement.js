import Link from 'next/link'

const PromotionDetailElement = () => (
	<div className="promotiondetailelement clear">
		<div className="promotiondetailbanner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-news.png?alt=media&token=d6a68923-d052-43c3-a510-fe3efca3ed23" />
		</div>
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/news"><a>ข่าวสาร</a></Link></li>
					<li><Link href="/promotion"><a>โปรโมชั่น</a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
				<div className="head-detail">
	 				<h1 className="title-detail"><span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน</h1>
	 				<h3 className="date-detail">27-29 เม.ย. 61</h3>
	 			</div>
		        <div className="image-detail">
		          	<img src="/static/images/imgpromo.jpg"/>
		        </div>
	 			<div className="content-detail">
	 				<p>เงื่อนไข</p>
	 				<ul>
	 					<li>1. โปรโมชั่นนี้เฉพาะลูกค้าที่ทานอาหารที่ร้านตำมั่ว สาขา ....เท่านั้น</li>
	 					<li>2.ทางร้านขอสงวนสิทธิ์เพียง 1 สิทธิ์ ต่อ 1 โต๊ะ เท่านั้น</li>
	 				</ul>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { PromotionDetailElement }