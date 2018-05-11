import Link from 'next/link'
import { PageNumber } from './'

const PromotionInfo = () => (
	<div className="promotioninfo clear">
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/news"><a>ข่าวสาร</a></Link></li>
					<li><Link href=""><a>โปรโมชั่น</a></Link></li>
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
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/280X280" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
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