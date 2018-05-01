const menu = (active) => {
	return ["Banners", "News", "Promotions"].map(item => 
		<li key={item}><a className={active === item ? 'active' : ''}>{item}</a></li>
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