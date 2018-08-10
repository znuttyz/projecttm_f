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
					<Logo handleLang={this.props.handleLang}/>
				</div>
				<div className="bg-navbar">
					<div className="container">
						<div className="navbar desktop">
							<ul>
								<li><Link href="/"><a className={(this.state.isActive === "home")?"active":""}><div className={(this.state.isActive === "home")?"nav-index active "+this.props.navbar:"nav-index "+this.props.navbar} /></a></Link></li>
								<li><Link href="/about"><a className={(this.state.isActive === "about")?"active":""}><div className={(this.state.isActive === "about")?"nav-about active "+this.props.navbar:"nav-about "+this.props.navbar} /></a></Link></li>
								<li><Link href="/brands/tummour"><a className={(this.state.isActive === "brands")?"active":""}><div className={(this.state.isActive === "brands")?"nav-brands active "+this.props.navbar:"nav-brands "+this.props.navbar} /></a></Link></li>
								<li><Link href="/news"><a className={(this.state.isActive === "news")?"active":""}><div className={(this.state.isActive === "news")?"nav-news active "+this.props.navbar:"nav-news "+this.props.navbar} /></a></Link></li>
								<li><Link href="/contact"><a className={(this.state.isActive === "contact")?"active":""}><div className={(this.state.isActive === "contact")?"nav-contact active "+this.props.navbar:"nav-contact "+this.props.navbar} /></a></Link></li>
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
										<li className="li" onClick={() => this.setState({isMenu: !this.state.isMenu})}><Link href="/"><a>{this.props.navbarmb.home}</a></Link></li>
										<li className="li" onClick={() => this.setState({isMenu: !this.state.isMenu})}><Link href="/about"><a>{this.props.navbarmb.about}</a></Link></li>
										<li className="li" onClick={() => this.setState({isMenu: !this.state.isMenu})}><Link href="/brands/tummour"><a>{this.props.navbarmb.brands}</a></Link></li>
										<li className="li" onClick={() => this.setState({isMenu: !this.state.isMenu})}><Link href="/news"><a>{this.props.navbarmb.news}</a></Link></li>
										<li className="li" onClick={() => this.setState({isMenu: !this.state.isMenu})}><Link href="/contact"><a>{this.props.navbarmb.contact}</a></Link></li>
										<ul className="lang-mb">
											<li><a href="#" onClick={()=>this.props.handleLang('th')}>ภาษาไทย</a></li>
											<li><a href="#" onClick={()=>this.props.handleLang('en')}>English</a></li>
											<li><a href="#" onClick={()=>this.props.handleLang('cn')}>中文</a></li>
										</ul>
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