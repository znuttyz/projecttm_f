import Link from 'next/link'

const PageNumber = () => (
	<div className="pagenumber clear">
		<ul>
			<li><Link href=""><a className="active">1</a></Link></li>
			<li><Link href=""><a>2</a></Link></li>
			<li><Link href=""><a>3</a></Link></li>
			<li><Link href=""><a>ต่อไป</a></Link></li>
		</ul>
	</div>
)

export { PageNumber }