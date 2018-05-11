import Link from 'next/link'

const HomePromotion = () => (
	<div className="home-promotion clear">
		<div className="container">
			<div className="title">
				<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F01-home%2Fline-p.png?alt=media&token=993eb81d-cdb0-46a1-a799-efc915110158" />
			</div>
			<div className="home-promotion-inner">
				<ul>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/250x250" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/250x250" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
					<li className="each-promotion">
						<Link href=""><a>
							<img src="http://placehold.it/250x250" />
							<div className="promotion-text">
								<h3>โปรโมชั่นตำมั่ว 50%</h3>
								<p>30 เม.ย. - 15 พ.ค. 61</p>
							</div>
						</a></Link>
					</li>
				</ul>
			</div>
			<div className="home-promotion-btn">
				<a href="">โปรโมชั่นเพิ่มเติม</a>
			</div>
		</div>
	</div>
)

export { HomePromotion }