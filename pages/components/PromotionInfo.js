import React, { Component } from 'react'
import Link from 'next/link'
import { PageNumber } from './'

class PromotionInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			lang: props.lang,
			promotions: [],
			selectedPage: 1,
			totalPage: 0
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.promotions) {
			let totalPage = Math.ceil(nextProps.promotions.length/9)
			this.setState({ 
				promotions: nextProps.promotions,
				totalPage
			})
		}
		if(nextProps.lang) {
			this.setState({ lang: nextProps.lang })
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

	showPromotions() {
		let runner = (this.state.selectedPage - 1)*9
		let max = runner + 9
		return this.state.promotions.map((item, index) => {
			if(runner === index && runner < max) {
				runner++

				// const month = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

				let month
				let title, banner
				switch(this.state.lang) {
					case "en":
						month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
						title = item.title_en
						banner = item.banner_en
						break;
					case "cn":
						month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
						title = item.title_cn
						banner = item.banner_cn
						break;
					default:
						month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
						title = item.title
						banner = item.banner_th
				}

				const sdate = new Date(item.start_date)
				const edate = new Date(item.end_date)
				let brand = ""
				
				if(item.brand === "Tummour") {
					brand = this.props.content.filter.tummour
				} else if (item.brand === "Laoyuan") {
					brand = this.props.content.filter.laoyuan
				} else if (item.brand === "Jaewhon") {
					brand = this.props.content.filter.jaewhon
				} else if (item.brand === "Pho") {
					brand = this.props.content.filter.pho
				}

				return (
					<li className="each-promotion" key={item.brand+""+index}>
						<Link href={{ pathname: '/promotiondetail', query: { id: item.id } }}><a>
							<div className="box-img">
								<img src={banner} />
							</div>
							<div className="promotion-text">
								<h3>
									<span>{brand}</span> {title}
								</h3>
								<p>{sdate.getDate()+" "+month[sdate.getMonth()]+" "+sdate.getFullYear()+" - "+edate.getDate()+" "+month[edate.getMonth()]+" "+edate.getFullYear()}</p>
							</div>
						</a></Link>
					</li>
				)

			}
		})
	}

	render() {
		return (
			<div className="promotioninfo clear">
				<div className="promotionbanner">
					<img src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F00-global%2Fbanner-news.png?alt=media&token=d6a68923-d052-43c3-a510-fe3efca3ed23" />
				</div>
				<div className="promotionbanner-mb">
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
			 			<select className="brands-filter" name="filter" onChange={event=>this.props.handleChange(event)}>
			 				<option value="All">{this.props.content.filter.all}</option>
			 				<option value="Tummour">{this.props.content.filter.tummour}</option>
			 				<option value="Laoyuan">{this.props.content.filter.laoyuan}</option>
			 				<option value="Jaewhon">{this.props.content.filter.jaewhon}</option>
			 				<option value="Pho">{this.props.content.filter.pho}</option>
			 			</select>
			 			<ul className="all-promotions">
							
							{this.showPromotions()}

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

export { PromotionInfo }
