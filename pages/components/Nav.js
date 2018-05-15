import Link from 'next/link'
import { Logo } from './'

const items = ["หน้าแรก", "เกี่ยวกับเรา", "แบรนด์ของเรา", "ข่าวสาร/โปรโมชั่น", "ติดต่อ"]

const Nav = ({ isActive }) => (
	<div className="header">
		<div className="container">
			<Logo />
		</div>
		<div className="bg-navbar">
			<div className="container">
				<div className="navbar">
					<ul>
						<li><Link href="/"><a><div className="nav-index" /></a></Link></li>
						<li><Link href="/about"><a><div className="nav-about" /></a></Link></li>
						<li><Link href="/brands/tummour"><a><div className="nav-brands" /></a></Link></li>
						<li><Link href="/news"><a><div className="nav-news" /></a></Link></li>
						<li><Link href="/contact"><a><div className="nav-contact" /></a></Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)

export { Nav }