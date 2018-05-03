import Link from 'next/link'

const menu = (active) => {
	return [
		{ name: "Banners", href: "/admin/banner" }, 
		{ name: "News", href: "/admin/news" }, 
		{ name: "Promotions", href: "/admin/promotion"} 
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