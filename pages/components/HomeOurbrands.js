import Link from 'next/link'

const HomeOurbrands = ({ content }) => (
	<div className="home-ourbrands clear">
		<div className="container">
			<div className="title">
				<img src={content.title} />
			</div>
			<div className="home-ourbrands-inner">
				<ul>
					<li className="each-brand">
						<Link href="/brands/tummour">
							<a>
								<div className="brandname">
									<img src={content.tummour.name} />
								</div>
								<div className="brandimg">
									<img src={content.tummour.image} />
								</div>
							</a>
						</Link>
					</li>
					<li className="each-brand">
						<Link href="/brands/laoyuan">
							<a>
								<div className="brandname">
									<img src={content.laoyuan.name} />
								</div>
								<div className="brandimg">
									<img src={content.laoyuan.image} />
								</div>
							</a>
						</Link>
					</li>
					<li className="each-brand">
						<Link href="/brands/jaewhon">
							<a>
								<div className="brandname">
									<img src={content.jaewhon.name} />
								</div>
								<div className="brandimg">
									<img src={content.jaewhon.image} />
								</div>
							</a>
						</Link>
					</li>
					<li className="each-brand">
						<Link href="/brands/pho">
							<a>
								<div className="brandname">
									<img src={content.jaewhon.name} />
								</div>
								<div className="brandimg">
									<img src={content.jaewhon.image} />
								</div>
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>
)

export { HomeOurbrands }