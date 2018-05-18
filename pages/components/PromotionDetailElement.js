import Link from 'next/link'

const PromotionDetailElement = ({ promotions }) => {
	const month = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
	const sdate = new Date(promotions.start_date)
	const edate = new Date(promotions.end_date)
	let brand = ""
	if(promotions.brand === "Tummour") {
		brand = "ตำมั่ว"
	} else if (promotions.brand === "Laoyuan") {
		brand = "ลาวญวณ"
	} else if (promotions.brand === "Jaewhon") {
		brand = "แจ่วฮ้อน"
	} else if (promotions.brand === "Pho") {
		brand = "เฝอ"
	}

	return (
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
					<div className="detail-info">
						<div className="head-detail">
			 				<h1 className="title-detail"><span>{brand}</span> {promotions.title}</h1>
			 				<h3 className="date-detail">{sdate.getDate()+" "+month[sdate.getMonth()]+" "+sdate.getFullYear()+" - "+edate.getDate()+" "+month[edate.getMonth()]+" "+edate.getFullYear()}</h3>
			 			</div>
				        <div className="image-detail">
				          	<img src={promotions.banner_th}/>
				        </div>
			 			<div className="content-detail">
			 				<p style={{whiteSpace: 'pre-line'}}>{promotions.body}</p>
			 			</div>
			 		</div>
		 		</div>
		 	</div>
		</div>
	)
}

export { PromotionDetailElement }