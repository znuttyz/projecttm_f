const Card = ({ children, title, subTitle }) => (
	<div className="cardAdmin">
		<div className="cardHeader">
			<h4 className="title">{title}</h4>
			<p className="sub-title">{subTitle}</p>
		</div>
		{children}
	</div>
)

export { Card }