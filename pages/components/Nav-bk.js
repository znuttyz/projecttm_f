const items = ["หน้าแรก", "เกี่ยวกับเรา", "แบรนด์ของเรา", "ข่าวสาร/โปรโมชั่น", "คู่ค้าสัมพันธ์", "ติดต่อ"]

const Nav = ({ isActive }) => (
	<div>
		<div className="navbar">
			<ul>
				{items.map(item => 
					<li className={isActive === item ? 'active' : ''} key={item} >
						{item}
					</li>
				)}
			</ul>
		</div>
	</div>
)


export { Nav }
