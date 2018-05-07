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
				<PageNumber />
	 			<ul>
					<li className="eachcontent">
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
	 				</li>
	 				<li className="eachcontent">
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
	 				</li>
	 				<li className="eachcontent">
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
	 				</li>
	 				<li className="eachcontent">
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
	 				</li>
	 			</ul>
	 			<PageNumber />
			</div>
		</div>
	</div>
)

export { NewsInfo }

// <div className="container">
// 	<ul className="tab">
// 		<li className="tabtopic">
// 			<ul>
// 				<li>
// 					<Link href=""><a className="active">ข่าวสาร</a></Link>
// 				</li>
// 				<li>
// 					<Link href=""><a>โปรโมชั่น</a></Link>
// 				</li>
// 			</ul>
// 		</li>
// 		<li className="tabcontent">
// 			<PageNumber />
// 			<ul>
// 				<li className="eachcontent">
// 					<ul>
// 						<li className="content-img">
// 							<img src="http://placehold.it/600x400" />
// 						</li>
// 						<li className="content-text">
// 							<h2>This is header.</h2>
// 							<p>content content content content content content content content content
// 							content content content content content</p>
// 						</li>
// 					</ul>
// 				</li>
// 				<li className="eachcontent">
// 					<ul>
// 						<li className="content-img">
// 							<img src="http://placehold.it/600x400" />
// 						</li>
// 						<li className="content-text">
// 							<h2>This is header.</h2>
// 							<p>content content content content content content content content content
// 							content content content content content</p>
// 						</li>
// 					</ul>
// 				</li>
// 				<li className="eachcontent">
// 					<ul>
// 						<li className="content-img">
// 							<img src="http://placehold.it/600x400" />
// 						</li>
// 						<li className="content-text">
// 							<h2>This is header.</h2>
// 							<p>content content content content content content content content content
// 							content content content content content</p>
// 						</li>
// 					</ul>
// 				</li>
// 				<li className="eachcontent">
// 					<ul>
// 						<li className="content-img">
// 							<img src="http://placehold.it/600x400" />
// 						</li>
// 						<li className="content-text">
// 							<h2>This is header.</h2>
// 							<p>content content content content content content content content content
// 							content content content content content</p>
// 						</li>
// 					</ul>
// 				</li>
// 			</ul>
// 			<PageNumber />
// 		</li>
// 	</ul>
// </div>