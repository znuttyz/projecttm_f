import Link from 'next/link'

const SoonElements = () => (
	<div className="soon clear">
		<div className="container soon-inner">
			<img src="static/images/00-global/tm.png"/>
			<h2>tummouroriginal.com</h2>
			<h1>เร็วๆ นี้</h1>
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
		</div>
	</div>
)

export { SoonElements }