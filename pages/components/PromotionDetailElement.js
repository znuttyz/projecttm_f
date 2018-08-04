import Link from 'next/link'

const PromotionDetailElement = ({ promotions, content, lang }) => {
	const sdate = new Date(promotions.start_date)
	const edate = new Date(promotions.end_date)
	let brand = ""
	if(promotions.brand === "Tummour") {
		brand = content.filter.tummour
	} else if (promotions.brand === "Laoyuan") {
		brand = content.filter.laoyuan
	} else if (promotions.brand === "Jaewhon") {
		brand = content.filter.jaewhon
	} else if (promotions.brand === "Pho") {
		brand = content.filter.pho
	}

	let month, title, banner, body
	switch(lang) {
		case "en":
			month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			title = promotions.title_en
			banner = promotions.banner_en
			body = promotions.body_en
			break;
		case "cn":
			month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			title = promotions.title_cn
			banner = promotions.banner_cn
			body = promotions.body_cn
			break;
		default:
			month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
			title = promotions.title
			banner = promotions.banner_th
			body = promotions.body
	}

	return (
		<div className="promotiondetailelement clear">
			<div className="promotiondetailbanner">
				<img src={content.banner} />
			</div>
			<div className="promotiondetailbanner-mb">
				<img src={content.bannermb} />
			</div>
			<div className="tab">
				<div className="tabtopic">
					<ul>
						<li><Link href="/news"><a>{content.categorynews}</a></Link></li>
						<li><Link href="/promotion"><a>{content.categorypromotion}</a></Link></li>
					</ul>
				</div>
				<div className="tabcontent">
					<div className="detail-info">
						<div className="head-detail">
			 				<h1 className="title-detail"><span>{brand}</span> {title}</h1>
			 				<h3 className="date-detail">{sdate.getDate()+" "+month[sdate.getMonth()]+" "+sdate.getFullYear()+" - "+edate.getDate()+" "+month[edate.getMonth()]+" "+edate.getFullYear()}</h3>
			 			</div>
				        <div className="image-detail">
				          	<img src={banner}/>
				        </div>
			 			<div className="content-detail">
			 				<p style={{whiteSpace: 'pre-line'}}>{body}</p>
			 			</div>
			 		</div>
		 		</div>
		 	</div>
		</div>
	)
}

export { PromotionDetailElement }