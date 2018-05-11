const showNews = (news) => {
	return news.map((data, index) => {
		return (
			<tr key={data.title}>
				<td>{index+1}</td>
				<td>{data.title}</td>
				<td>{data.sub_body}</td>
				<td>{data.body}</td>
				<td>
					<a href="#">Gallery</a>
					<a href="#">Edit</a>
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