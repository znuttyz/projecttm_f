const Header = ({ title, user }) => (
	<div className="headerContainerAdmin">
		<div className="headerTitleAdmin"><a>{title}</a></div>
		<ul>
			<li>{user}</li>
			<li><a>Logout</a></li>
		</ul>
	</div>
)

export { Header }