import Link from 'next/link'

const items = ["หน้าแรก", "เกี่ยวกับเรา", "แบรนด์ของเรา", "ข่าวสาร/โปรโมชั่น", "ติดต่อ"]

const Nav = ({ isActive }) => (
	<div className="header">
		<div className="container">
			<div className="logo">
				<Link href="/"><a><img src="static/images/00-global/tummour.png" /></a></Link>
			</div>
		</div>
		<div className="bg-navbar">
			<div className="container">
				<div className="navbar">
					<ul>
						<li><Link href="/"><a><img src="static/images/00-nav/01.png" /></a></Link></li>
						<li><Link href="/"><a><img src="static/images/00-nav/02.png" /></a></Link></li>
						<li><Link href="/"><a><img src="static/images/00-nav/03.png" /></a></Link></li>
						<li><Link href="/promotion"><a><img src="static/images/00-nav/04.png" /></a></Link></li>
						<li><Link href="/"><a><img src="static/images/00-nav/05.png" /></a></Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)


export { Nav }