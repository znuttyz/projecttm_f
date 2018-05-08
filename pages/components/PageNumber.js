import React, { Component } from 'react'

class PageNumber extends Component {

	constructor(props) {
		super(props)
		this.state = {
			selectedPage: 1,
			totalPage: 4,
		}
	}

	_onSelectPage(selectedPage) {
		this.setState({ selectedPage })
	}

	_onSelectNextPage() {
		let selectedPage = this.state.selectedPage + 1
		this.setState({ selectedPage })
	}

	_onSelectPreviousPage() {
		let selectedPage = this.state.selectedPage - 1
		this.setState({ selectedPage })
	}

	nextPage() {
		if(this.state.selectedPage === this.state.totalPage) return;
		else return <li><a onClick={()=>this._onSelectNextPage()}>ต่อไป</a></li>
	}

	previousPage() {
		if(this.state.selectedPage === 1) return;
		else return <li><a onClick={()=>this._onSelectPreviousPage()}>ก่อนหน้า</a></li>
	}

	showPage() {
		let pages = []
		for(let i = 1; i <= this.state.totalPage; i++) {
			pages.push(<li><a className={(this.state.selectedPage === i)? "active":""} onClick={()=>this._onSelectPage(i)}>{i}</a></li>)
		}
		return pages
	}

	render() {
		return (
			<div className="pagenumber clear">
				<ul>
					{this.previousPage()}
					{this.showPage()}
					{this.nextPage()}
				</ul>
			</div>
		)
	}
}

export { PageNumber }

// <li><a className={(this.state.selectedPage === 1)? "active":""} onClick={()=>this._onSelectPage(1)}>1</a></li>
					// <li><a className={(this.state.selectedPage === 2)? "active":""} onClick={()=>this._onSelectPage(2)}>2</a></li>
					// <li><a className={(this.state.selectedPage === 3)? "active":""} onClick={()=>this._onSelectPage(3)}>3</a></li>