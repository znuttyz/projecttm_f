import Link from 'next/link'

const showNews = (news) => {
	return news.map((data, index) => {
		let d = new Date(data.date)
		let date = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
		return (
			<tr key={data.title}>
				<td>{date}</td>
				<td>{data.title}</td>
				<td>{data.sub_body}</td>
				<td>{data.body}</td>
				<td>
					<Link href={{ pathname: '/admin/news_gallery', query: { id: data.id } }}><a href="#">Gallery</a></Link>
					<Link href={{ pathname: '/admin/news_edit', query: { id: data.id } }}><a>Edit</a></Link>
					<a href="#">Delete</a>
				</td>
			</tr>
		)
	})
}

const Table = ({ news }) => {
	return (
		<table className="tableAdmin">
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Sub-Body</th>
					<th>Body</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
				{showNews(news)}
			</tbody>
		</table>
	)
}

export { Table }