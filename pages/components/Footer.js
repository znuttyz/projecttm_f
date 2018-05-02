import Link from 'next/link'

const Footer = () => (
	<div className="footer clear">
		<img src="static/images/00-global/footer.png"/>
		<div className="footer-info">
			<div className="container">
				<ul className="social-icons">
					<li>
						<Link href=""><a>
							<i className="fab fa-line" />
							<h2>@tummouroriginal</h2>
						</a></Link>
					</li>
					<li>
						<Link href=""><a>
							<i className="fab fa-facebook-square" />
							<h2>ตำมั่วต้นตำรับ</h2>
						</a></Link>
					</li>
					<li>
						<Link href=""><a>
							<i className="fab fa-instagram" />
							<h2>spicygang</h2>
						</a></Link>
					</li>
				</ul>
				<div className="copyright">© 2016 ZEN & SPICY CO.,LTD All rights Reserved.</div>
			</div>
		</div>
	</div>
)

export { Footer }