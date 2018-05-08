import Link from 'next/link'
import { PageNumber } from './'

const NewsInfo = () => (
	<div className="newsinfo clear">
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href=""><a>ข่าวสาร</a></Link></li>
					<li><Link href=""><a>โปรโมชั่น</a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
	 			<ul>
					<li className="eachcontent">
						<Link href=""><a>
							<ul>
								<li className="content-img">
									<img src="http://placehold.it/600x400" />
		 						</li>
		 						<li className="content-text">
		 							<h2>This is header.</h2>
		 							<p>content content content content content content content content content
		 							content content content content content</p>
		 						</li>
		 					</ul>
		 				</a></Link>
	 				</li>
	 				<li className="eachcontent">
						<Link href=""><a>
							<ul>
								<li className="content-img">
									<img src="http://placehold.it/600x400" />
		 						</li>
		 						<li className="content-text">
		 							<h2>This is header.</h2>
		 							<p>content content content content content content content content content
		 							content content content content content</p>
		 						</li>
		 					</ul>
		 				</a></Link>
	 				</li>
	 				<li className="eachcontent">
						<Link href=""><a>
							<ul>
								<li className="content-img">
									<img src="http://placehold.it/600x400" />
		 						</li>
		 						<li className="content-text">
		 							<h2>This is header.</h2>
		 							<p>content content content content content content content content content
		 							content content content content content</p>
		 						</li>
		 					</ul>
		 				</a></Link>
	 				</li>
	 				<li className="eachcontent">
						<Link href=""><a>
							<ul>
								<li className="content-img">
									<img src="http://placehold.it/600x400" />
		 						</li>
		 						<li className="content-text">
		 							<h2>This is header.</h2>
		 							<p>content content content content content content content content content
		 							content content content content content</p>
		 						</li>
		 					</ul>
		 				</a></Link>
	 				</li>
	 			</ul>
	 			<PageNumber />
	 		</div>
	 	</div>
	</div>
)

export { NewsInfo }