import React, { Component } from 'react'
import Link from 'next/link'
import { PageNumber } from './'

class NewsInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			news: [],
			selectedPage: 1,
			totalPage: 0
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.news) {
			let totalPage = Math.ceil(nextProps.news.length/4)
			this.setState({ 
				news: nextProps.news,
				totalPage
			})
		}
	}

	_onSelectPage(selectedPage) {
		this.setState({ selectedPage })
	}

	_onSelectNextPage(selectedPage) {
		this.setState({ selectedPage })
	}

	_onSelectPreviousPage(selectedPage) {
		this.setState({ selectedPage })
	}

	showNews() {
		let runner = (this.state.selectedPage - 1)*4
		let max = runner + 4
		return this.state.news.map((item, index) => {
			if(runner === index && runner < max) {
				runner++

				const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
				const date = new Date(item.date)
				return (
					<li className="eachcontent" key={item.title}>
						<Link href={{ pathname: '/newsdetail', query: { id: item.id } }}><a>
							<ul>
								<li className="content-img">
									<div className="detail-img">
										<img src={item.banner_th} />
									</div>
		 						</li>
		 						<li className="content-text">
		 							<div className="detail-info">
			 							<h2 className="topic">{item.title}</h2>
			 							<h4 className="date">{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}</h4>
			 							<p className="sub-content">{item.body}</p>
		 							</div>
		 						</li>
		 					</ul>
		 				</a></Link>
					</li>
				)

			}
		})
	}

	render() {
		return (
			<div className="newsinfo clear">
				<div className="newsbanner">
					<img src={this.props.content.banner} />
				</div>
				<div className="newsbanner-mb">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F04-promotion%2Fbannernews-mb.png?alt=media&token=35bfd467-2d5f-4e9f-ace7-4b52b0b889cd" />
				</div>
				<div className="tab">
					<div className="tabtopic">
						<ul>
							<li><Link href="/news"><a>{this.props.content.categorynews}</a></Link></li>
							<li><Link href="/promotion"><a>{this.props.content.categorypromotion}</a></Link></li>
						</ul>
					</div>
					<div className="tabcontent">
			 			<ul>
							{this.showNews()}
			 			</ul>
			 			{
			 				(this.state.totalPage < 2)? '':
			 				<PageNumber 
			 					totalPage={this.state.totalPage} 
			 					selectedPage={this.state.selectedPage} 
			 					selectPage={(selectedPage)=>this._onSelectPage(selectedPage)} 
			 					nextPage={(selectedPage)=>this._onSelectNextPage(selectedPage)} 
			 					previousPage={(selectedPage)=>this._onSelectPreviousPage(selectedPage)} 
			 				/>
			 			}
			 		</div>
			 	</div>
			</div>
		)
	}
}

export { NewsInfo }