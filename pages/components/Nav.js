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
						<li><Link href="/"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-nav%2F01.png?alt=media&token=62b265b0-87ee-41be-887d-295b463b3d64" /></a></Link></li>
						<li><Link href="/about"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-nav%2F02.png?alt=media&token=0ac403ee-9fa0-416a-b2c9-328eb2b52f03" /></a></Link></li>
						<li><Link href="/brands"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-nav%2F03.png?alt=media&token=0fbd37fe-238b-4bd6-be17-76ad3fb70df7" /></a></Link></li>
						<li><Link href="/news"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-nav%2F04.png?alt=media&token=ffdc36c3-f204-4b7b-8ce0-8ff37cd03e5d" /></a></Link></li>
						<li><Link href="/contact"><a><img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-nav%2F05.png?alt=media&token=cbee661a-6ca9-4c2b-80a6-003a24f93744" /></a></Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)

export { Nav }