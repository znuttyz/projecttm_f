import Link from 'next/link'

const Footer = () => (
	<div className="footer clear">
		<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ffooter.png?alt=media&token=e53f8032-a891-4305-9adf-d3db0e3c35ed"/>
		<div className="footer-info">
			<div className="container">
				<ul className="social-icons">
					<li>
						<Link href="http://line.me/ti/p/%40aiq4603n"><a target="_blank">
							<i className="fab fa-line" />
							<h2>@tummouroriginal</h2>
						</a></Link>
					</li>
					<li>
						<Link href="https://www.facebook.com/tummouroriginal"><a target="_blank">
							<i className="fab fa-facebook-square" />
							<h2>ตำมั่ว ต้นตำรับ</h2>
						</a></Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/spicygang"><a target="_blank">
							<i className="fab fa-instagram" />
							<h2>spicygang</h2>
						</a></Link>
					</li>
				</ul>
				<div className="copyright"><i class="far fa-copyright"></i> 2018 ZEN & SPICY CO.,LTD All rights Reserved.</div>
			</div>
		</div>
	</div>
)

export { Footer }