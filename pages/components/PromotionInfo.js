import Link from 'next/link'
import { PageNumber } from './'

const PromotionInfo = () => (
	<div className="promotioninfo clear">
		<div className="promotionbanner">
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
	 			<select className="brands-filter">
	 				<option value="">ตำมั่ว</option>
	 				<option value="">ลาวญวณ</option>
	 				<option value="">แจ่วฮ้อน</option>
	 				<option value="">เฝอ</option>
	 			</select>
	 			<ul className="all-promotions">
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href="/promotiondetail"><a>
							<img src="/static/images/imgpromo.jpg" />
							<div className="promotion-text">
								<h3>
									<span>ตำมั่ว</span> ฟรีเมนูตำมั่ว เพียงเช็คอินภายในร้าน
								</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
				</ul>
	 			<PageNumber />
	 		</div>
	 	</div>
	</div>
)

export { PromotionInfo }