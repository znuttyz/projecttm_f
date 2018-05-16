import Link from 'next/link'
import Slider from "react-slick";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const NewsDetailElement = ({ news }) => {
	const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
	const date = new Date(news.date)
	return (
		<div className="newsdetailelement clear">
			<div className="newsdetailbanner">
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
		 				<h1 className="title-detail">{news.title}</h1>
		 				<h3 className="date-detail">{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}</h3>
		 			</div>
		 			<Slider {...settings} className="image-detail">

				        <div>
				          	<img src={news.banner_th}/>
				        </div>
				        
				    </Slider>
		 			<div className="content-detail">
		 				<p>{news.body}</p>
		 			</div>
		 		</div>
		 	</div>
		</div>
	)
}

export { NewsDetailElement }