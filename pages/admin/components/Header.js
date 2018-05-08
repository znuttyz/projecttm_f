const Header = ({ title, user, handleLogout }) => (
	<div className="headerContainerAdmin">
		<div className="headerTitleAdmin"><a>{title}</a></div>
		<ul>
			<li>{user}</li>
			<li><a onClick={handleLogout}>Logout</a></li>
		</ul>
	</div>
)

export { Header }