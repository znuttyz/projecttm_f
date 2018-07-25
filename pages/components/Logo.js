import Link from 'next/link'

const Logo = () => (
	<div className="logo">
		<Link href="/"><a><img src="/static/images/00-global/tummour.png" /></a></Link>
		<div className="language lang-pc">
			<ul>
				<li>
					<Link href=""><a><img src="/static/images/00-global/flag-th.png" /></a></Link>
				</li>
				<li>
					<Link href=""><a><img src="/static/images/00-global/flag-en.png" /></a></Link>
				</li>
				<li>
					<Link href=""><a><img src="/static/images/00-global/flag-cn.png" /></a></Link>
				</li>
			</ul>
		</div>
	</div>
)

export { Logo }