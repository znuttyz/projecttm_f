import Link from 'next/link'
import Slider from "react-slick";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const showImg = (images) => {
	return images.map(item => {
		return (
			<div className="box-img">
				<img src={item} alt="news_image" />
			</div>
		)
	})
}

const NewsDetailElement = ({ news, images, lang, content }) => {
	const date = new Date(news.date)
	let month
	let title, banner, body
	switch(lang) {
		case "en":
			month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			title = news.title_en
			banner = news.banner_en
			body = news.body_en
			break;
		case "cn":
			month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			title = news.title_cn
			banner = news.banner_cn
			body = news.body_cn
			break;
		default:
			month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
			title = news.title
			banner = news.banner_th
			body = news.body
	}


	return (
		<div className="newsdetailelement clear">
			<div className="newsdetailbanner">
				<img src={content.banner} />
			</div>
			<div className="newsdetailbanner-mb">
				<img src={content.bannermb} />
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
			 				<h1 className="title-detail">{title}</h1>
			 				<h3 className="date-detail">{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}</h3>
			 			</div>
			 			<Slider {...settings} className="image-detail">

					        <div>
					          	<img src={banner} />
					        </div>

					        {showImg(images)}
					        
					    </Slider>
			 			<div className="content-detail">
			 				<p>{body}</p>
			 			</div>
			 		</div>
		 		</div>
		 	</div>
		</div>
	)
}

export { NewsDetailElement }