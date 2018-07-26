import Link from 'next/link'

const Logo = ({ handleLang }) => (
	<div className="logo">
		<Link href="/"><a><img src="/static/images/00-global/tummour.png" /></a></Link>
		<div className="language lang-pc">
			<ul>
				<li>
					<a href="#" onClick={()=>handleLang('th')}><img src="/static/images/00-global/flag-th.png" /></a>
				</li>
				<li>
					<a href="#" onClick={()=>handleLang('en')}><img src="/static/images/00-global/flag-en.png" /></a>
				</li>
				<li>
					<a href="#" onClick={()=>handleLang('cn')}><img src="/static/images/00-global/flag-cn.png" /></a>
				</li>
			</ul>
		</div>
	</div>
)

export { Logo }