import Link from 'next/link'

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
					<div className="promotion-img">
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

const HomePromotion = ({ promotions }) => (
	<div className="home-promotion clear">
		<div className="container">
			<div className="title">
				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F01-home%2Fline-p.png?alt=media&token=993eb81d-cdb0-46a1-a799-efc915110158" />
			</div>
			<div className="home-promotion-inner">
				<ul>
					
					{showPromotions(promotions)}
					
				</ul>
			</div>
			<div className="home-promotion-btn">
				<Link href="/promotion"><a>โปรโมชั่นเพิ่มเติม</a></Link>
			</div>
		</div>
	</div>
)

export { HomePromotion }