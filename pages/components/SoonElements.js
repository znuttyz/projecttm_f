import Link from 'next/link'

const SoonElements = () => (
	<div className="soon clear">
		<div className="container soon-inner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Ftm.png?alt=media&token=ac35c520-2402-422d-ba6b-c28a94eab001"/>
			<h2>tummouroriginal.com</h2>
			<h1>เร็วๆ นี้</h1>
			<ul className="social-icons">
				<li>
					<Link href="http://line.me/ti/p/%40aiq4603n"><a target="_blank">
						<i className="fab fa-line" />
						<h2>@tummouroriginal</h2>
					</a></Link>
				</li>
				<li>
					<Link href="https://www.facebook.com/tummouroriginal/"><a target="_blank">
						<i className="fab fa-facebook-square" />
						<h2>ตำมั่ว ต้นตำรับ</h2>
					</a></Link>
				</li>
				<li>
					<Link href="https://www.instagram.com/spicygang/"><a target="_blank">
						<i className="fab fa-instagram" />
						<h2>spicygang</h2>
					</a></Link>
				</li>
			</ul>
		</div>
	</div>
)

export { SoonElements }