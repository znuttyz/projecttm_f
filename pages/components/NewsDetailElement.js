import Link from 'next/link'
import Slider from "react-slick";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const NewsDetailElement = () => (
	<div className="newsdetailelement clear">
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/news"><a>ข่าวสาร</a></Link></li>
					<li><Link href="/promotion"><a>โปรโมชั่น</a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
				<div className="head-detail">
	 				<h1 className="title-detail">ตำมั่วจัดงาน stranger together</h1>
	 				<h3 className="date-detail">19 ม.ค. 61</h3>
	 			</div>
	 			<Slider {...settings} className="image-detail">
			        <div>
			          	<img src="/static/images/imgnews.jpg"/>
			        </div>
			        <div>
			          	<img src="/static/images/imgnews.jpg"/>
			        </div>
			        <div>
			          	<img src="/static/images/imgnews.jpg"/>
			        </div>
			        <div>
			         	<img src="/static/images/imgnews.jpg"/>
			        </div>
			        <div>
			          	<img src="/static/images/imgnews.jpg"/>
			        </div>
			        <div>
			          	<img src="/static/images/imgnews.jpg"/>
			        </div>
			    </Slider>
	 			<div className="content-detail">
	 				<p>เมื่อวันที่ 19 มกราคม 2561 แบรนด์ตำมั่วได้มีการจัดงาน
	 				stranger together ณ โรงแรม Miracle Grand
	 				เพื่อเป็นการกำหนดทิศทางการดำเนินธุรกิจในปี 2561 ภายใต้แบรนด์ตำมั่วทั้งหมด
	 				ภายในงานมีการนำพรีเซนเตอร์คนปัจจุบันซึ่งก็คือ “ก้องห้วยไร่”
	 				มาร้องเพลงพร้อมกับเปิดตัวเมนู่ใหม่ มีการให้เฟรนไชส์ปรึกษาปัญญาการดำเนินธุรกิจร้านอาหารของเรา
	 				และในภาคค่ำได้มีการจัดเลี้ยงเพื่อกระชับความสัมพันธ์กันระหว่างแบรนด์กับลูกค้เฟนไชส์</p>
	 			</div>
	 		</div>
	 	</div>
	</div>
)

export { NewsDetailElement }