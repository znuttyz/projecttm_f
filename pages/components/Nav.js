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
				<div className="navbar desktop">
					<ul>
						<li><Link href="/"><a className={(isActive === "home")?"active":""}><div className={(isActive === "home")?"nav-index active":"nav-index"} /></a></Link></li>
						<li><Link href="/about"><a className={(isActive === "about")?"active":""}><div className={(isActive === "about")?"nav-about active":"nav-about"} /></a></Link></li>
						<li><Link href="/brands/tummour"><a className={(isActive === "brands")?"active":""}><div className={(isActive === "brands")?"nav-brands active":"nav-brands"} /></a></Link></li>
						<li><Link href="/news"><a className={(isActive === "news")?"active":""}><div className={(isActive === "news")?"nav-news active":"nav-news"} /></a></Link></li>
						<li><Link href="/contact"><a className={(isActive === "contact")?"active":""}><div className={(isActive === "contact")?"nav-contact active":"nav-contact"} /></a></Link></li>
					</ul>
				</div>
				<div className="navbar mobile">
					
				</div>
			</div>
		</div>
	</div>
)

export { Nav }