import Link from 'next/link'
import { PageNumber } from './'

const showNews = (news) => {
	return news.map(item => {
		const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
		const date = new Date(item.date)
		return (
			<li className="eachcontent" key={item.title}>
				<Link href={{ pathname: '/newsdetail', query: { id: item.id } }}><a>
					<ul>
						<li className="content-img">
							<img src="/static/images/imgnews.jpg" />
 						</li>
 						<li className="content-text">
 							<h2 className="topic">{item.title}</h2>
 							<h4 className="date">{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}</h4>
 							<p className="sub-content">{item.body}</p>
 						</li>
 					</ul>
 				</a></Link>
			</li>
		)
	})
}

const NewsInfo = ({ news }) => (
	<div className="newsinfo clear">
		<div className="newsbanner">
			<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-news.png?alt=media&token=d6a68923-d052-43c3-a510-fe3efca3ed23" />
		</div>
		<div className="tab">
			<div className="tabtopic">
				<ul>
					<li><Link href="/news"><a>ข่าวสาร</a></Link></li>
					<li><Link href="/promotion"><a>โปรโมชั่น</a></Link></li>
				</ul>
			</div>
			<div className="tabcontent">
	 			<ul>
					{showNews(news)}
	 			</ul>
	 			<PageNumber />
	 		</div>
	 	</div>
	</div>
)

export { NewsInfo }