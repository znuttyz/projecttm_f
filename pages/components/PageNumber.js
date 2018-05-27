import React, { Component } from 'react'

class PageNumber extends Component {

	constructor(props) {
		super(props)
		this.state = {
			selectedPage: props.selectedPage,
			totalPage: props.totalPage,
		}
	}

	_onSelectPage(e) {
		this.setState({ selectedPage: parseInt(e.target.name) })
		this.props.selectPage(parseInt(e.target.name))
	}

	_onSelectNextPage() {
		let selectedPage = (this.state.selectedPage !== this.state.totalPage)? this.state.selectedPage + 1 : this.state.selectedPage
		this.setState({ selectedPage })
		this.props.nextPage(selectedPage)
	}

	_onSelectPreviousPage() {
		let selectedPage = (this.state.selectedPage !== 1)? this.state.selectedPage - 1 : this.state.selectedPage
		this.setState({ selectedPage })
		this.props.previousPage(selectedPage)
	}

	nextPage() {
		if(this.state.selectedPage === this.state.totalPage) return <li><a onClick={()=>this._onSelectNextPage()} style={{visibility: "hidden"}}>ต่อไป</a></li>
		else return <li><a onClick={()=>this._onSelectNextPage()}>ต่อไป</a></li>
	}

	previousPage() {
		if(this.state.selectedPage === 1) return <li><a onClick={()=>this._onSelectPreviousPage()} style={{visibility: "hidden"}}>ก่อนหน้า</a></li>
		else return <li><a onClick={()=>this._onSelectPreviousPage()}>ก่อนหน้า</a></li>
	}

	showPage() {
		let pages = []
		let i = 1
		let max = this.state.totalPage

		if(this.state.totalPage > 4 && this.state.selectedPage < this.state.totalPage && this.state.selectedPage > 2) {
			max = this.state.selectedPage + 1
			i = max - 3	
			
		} else if(this.state.totalPage > 4 && this.state.selectedPage < this.state.totalPage && this.state.selectedPage <= 2) {
			max = 4
			i = max - 3

		} else if(this.state.selectedPage === this.state.totalPage && this.state.totalPage > 4) {
			max = this.state.selectedPage
			i = max - 3
			
		} else if(this.state.selectedPage === this.state.totalPage) {
			max = this.state.selectedPage
			i = 1

		} else if(this.state.selectedPage < 4) {
			max = this.state.totalPage
			i = 1
			
		}

		for( i ; i <= max; i++) {
			pages.push(<li key={"pagination"+i}><a className={(this.state.selectedPage === i)? "active":""} name={i} onClick={(e)=>this._onSelectPage(e)}>{i}</a></li>)
		}
		return pages
	}

	render() {
		return (
			<div className="pagenumber clear">
				<ul>
					{(this.state.totalPage > 4)? this.previousPage():''}
					{this.showPage()}
					{(this.state.totalPage > 4)? this.nextPage():''}
				</ul>
			</div>
		)
	}
}

export { PageNumber }
