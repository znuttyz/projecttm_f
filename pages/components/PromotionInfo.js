import Link from 'next/link'
import { PageNumber } from './'

const showPromotions = (promotions) => {
	return promotions.map((item, index) => {
		const month = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
		const sdate = new Date(item.start_date)
		const edate = new Date(item.end_date)
		let brand = ""
		if(item.brand === "Tummour") {
			brand = "ตำมั่ว"
		} else if (item.brand === "Laoyuan") {
			brand = "ลาวญวณ"
		} else if (item.brand === "Jaewhon") {
			brand = "แจ่วฮ้อน"
		} else if (item.brand === "Pho") {
			brand = "เฝอ"
		}

		return (
			<li className="each-promotion" key={item.brand+""+index}>
				<Link href={{ pathname: '/promotiondetail', query: { id: item.id } }}><a>
					<div className="box-img">
						<img src={item.banner_th} />
					</div>
					<div className="promotion-text">
						<h3>
							<span>{brand}</span> {item.title}
						</h3>
						<p>{sdate.getDate()+" "+month[sdate.getMonth()]+" "+sdate.getFullYear()+" - "+edate.getDate()+" "+month[edate.getMonth()]+" "+edate.getFullYear()}</p>
					</div>
				</a></Link>
			</li>
		)
	})
}

const PromotionInfo = ({ promotions, handleChange }) => (
	<div className="promotioninfo clear">
		<div className="promotionbanner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-news.png?alt=media&token=d6a68923-d052-43c3-a510-fe3efca3ed23" />
		</div>
		<div className="promotionbanner-mb">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F04-promotion%2Fbannernews-mb.png?alt=media&token=35bfd467-2d5f-4e9f-ace7-4b52b0b889cd" />
		</div>
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/news"><a>ข่าวสาร</a></Link></li>
					<li><Link href="/promotion"><a>โปรโมชั่น</a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
	 			<select className="brands-filter" name="filter" onChange={event=>handleChange(event)}>
	 				<option value="All">ทุกแบรนด์</option>
	 				<option value="Tummour">ตำมั่ว</option>
	 				<option value="Laoyuan">ลาวญวณ</option>
	 				<option value="Jaewhon">แจ่วฮ้อน</option>
	 				<option value="Pho">เฝอ</option>
	 			</select>
	 			<ul className="all-promotions">
					
					{showPromotions(promotions)}

				</ul>
	 			<PageNumber />
	 		</div>
	 	</div>
	</div>
)

export { PromotionInfo }