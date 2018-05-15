import Link from 'next/link'

const showNews = (news, handleDelete) => {
	return news.map((data, index) => {
		let d = new Date(data.date)
		let date = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
		return (
			<tr key={data.title}>
				<td>{date}</td>
				<td>{data.title}</td>
				<td>{data.body}</td>
				<td>
					<Link href={{ pathname: '/admin/news_gallery', query: { id: data.id } }}><a href="#">Gallery</a></Link>
					<Link href={{ pathname: '/admin/news_edit', query: { id: data.id } }}><a>Edit</a></Link>
					<a href="#" onClick={() => handleDelete(data.id)}>Delete</a>
				</td>
			</tr>
		)
	})
}

const showPromotion = (promotions, handleDelete) => {
	return promotions.map((data, index) => {
		let d = new Date(data.date)
		let date = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
		return (
			<tr key={data.title}>
				<td>{date}</td>
				<td>{data.title}</td>
				<td>{data.body}</td>
				<td>
					<Link href={{ pathname: '/admin/promotion_edit', query: { id: data.id } }}><a>Edit</a></Link>
					<a href="#" onClick={() => handleDelete(data.id)}>Delete</a>
				</td>
			</tr>
		)
	})
}


const Table = (props) => {
	return (
		<table className="tableAdmin">
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Body</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
				{(props.title === "News")? showNews(props.news, props.handleDelete) : showPromotion(props.promotions, props.handleDelete)}
			</tbody>
		</table>
	)
}

export { Table }