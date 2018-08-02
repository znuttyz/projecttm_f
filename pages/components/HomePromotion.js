import Link from 'next/link'

const showPromotions = (promotions, content, lang) => {
	return promotions.map((item, index) => {
		const sdate = new Date(item.start_date)
		const edate = new Date(item.end_date)

		let brand = ""
		if(item.brand === "Tummour") {
			brand = content.filter.tummour
		} else if (item.brand === "Laoyuan") {
			brand = content.filter.laoyuan
		} else if (item.brand === "Jaewhon") {
			brand = content.filter.jaewhon
		} else if (item.brand === "Pho") {
			brand = content.filter.pho
		}

		let month
		let title, banner
		switch(lang) {
			case "en":
				month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				title = item.title_en
				banner = item.banner_en
				break;
			case "cn":
				month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				title = item.title_cn
				banner = item.banner_cn
				break;
			default:
				month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
				title = item.title
				banner = item.banner_th
		}


		return (
			<li className="each-promotion" key={item.brand+""+index}>
				<Link href={{ pathname: '/promotiondetail', query: { id: item.id } }}><a>
					<div className="promotion-img">
						<img src={banner} />
					</div>
					<div className="promotion-text">
						<h3>
							<span>{brand}</span> {title}
						</h3>
						<p>{sdate.getDate()+" "+month[sdate.getMonth()]+" "+sdate.getFullYear()+" - "+edate.getDate()+" "+month[edate.getMonth()]+" "+edate.getFullYear()}</p>
					</div>
				</a></Link>
			</li>
		)
	})
}

const HomePromotion = ({ promotions, content, lang }) => (
	<div className="home-promotion clear">
		<div className="container">
			<div className="title">
				<img src={content.title} />
			</div>
			<div className="home-promotion-inner">
				<ul>
					
					{showPromotions(promotions, content, lang)}
					
				</ul>
			</div>
			<div className="home-promotion-btn">
				<Link href="/promotion"><a>{content.more}</a></Link>
			</div>
		</div>
	</div>
)

export { HomePromotion }