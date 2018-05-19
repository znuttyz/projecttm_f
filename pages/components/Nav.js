import React, { Component } from 'react'
import Link from 'next/link'
import { Logo } from './'

class Nav extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isActive: props.isActive,
			isMenu: false
		}
	}

	render() {
		return (
			<div className="header">
				<div className="container">
					<Logo />
				</div>
				<div className="bg-navbar">
					<div className="container">
						<div className="navbar desktop">
							<ul>
								<li><Link href="/"><a className={(this.state.isActive === "home")?"active":""}><div className={(this.state.isActive === "home")?"nav-index active":"nav-index"} /></a></Link></li>
								<li><Link href="/about"><a className={(this.state.isActive === "about")?"active":""}><div className={(this.state.isActive === "about")?"nav-about active":"nav-about"} /></a></Link></li>
								<li><Link href="/brands/tummour"><a className={(this.state.isActive === "brands")?"active":""}><div className={(this.state.isActive === "brands")?"nav-brands active":"nav-brands"} /></a></Link></li>
								<li><Link href="/news"><a className={(this.state.isActive === "news")?"active":""}><div className={(this.state.isActive === "news")?"nav-news active":"nav-news"} /></a></Link></li>
								<li><Link href="/contact"><a className={(this.state.isActive === "contact")?"active":""}><div className={(this.state.isActive === "contact")?"nav-contact active":"nav-contact"} /></a></Link></li>
							</ul>
						</div>
						<div className="navbar mobile">
							<div className="container">
								<div className={(this.state.isMenu)? "hamburger open" : "hamburger"} onClick={() => this.setState({isMenu: !this.state.isMenu})}>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className={(this.state.isMenu)? "navigation open" : "navigation"}>
									<ul>
										<li className="li"><Link href="/"><a>หน้าแรก</a></Link></li>
										<li className="li"><Link href="/about"><a>เกี่ยวกับเรา</a></Link></li>
										<li className="li"><Link href="/brands/tummour"><a>แบรนด์ของเรา</a></Link></li>
										<li className="li"><Link href="/news"><a>ข่าวสาร/โปรโมชั่น</a></Link></li>
										<li className="li"><Link href="/contact"><a>ติดต่อเรา</a></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export { Nav }