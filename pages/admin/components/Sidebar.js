import Link from 'next/link'

const menu = (active) => {
	return [
		{ name: "Banners", href: "/admin/banner" },
		{ name: "Brands", href: "/admin/brand/list" },
		{ name: "News", href: "/admin/news" },
		{ name: "Promotions", href: "/admin/promotion" },
		{ name: "Messages", href: "/admin/message" }
	].map(item => 
		<li key={item.name}>
			<Link href={item.href}><a className={active === item.name ? 'active' : ''}>{item.name}</a></Link>
		</li>
	)
}

const Sidebar = ({ active }) => (
	<div>
		<div className="sidebarLogoAdmin">
			<a>TUMMOUR</a>
		</div>

		<div className="sidebarWrapperAdmin">
			<ul>
				{ menu(active) }
			</ul>
		</div>

	</div>
)

export { Sidebar }