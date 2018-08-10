import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Cookies from 'js-cookie'
import { Head, Nav, AllBanner, BrandElement, Footer } from '../components'

import withRedux from 'next-redux-wrapper'
import { 
	initStore,
	brandFetch,
	brandFetchAllRegion
} from '../actions'

import '../../styles/index.scss'

class Kruathai extends Component {

	constructor(props) {
		super(props)
		if(!Cookies.get('lang')) Cookies.set('lang', 'th')
		this.state = {
			lang: Cookies.get('lang'),
			brand_url: "kruathai",
			brand: null,
			regions: null
		}
	}

	componentWillMount() {
		this.props.brandFetch(this.state.brand_url)
		this.props.brandFetchAllRegion(this.state.brand_url)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.brand) {
			this.setState({
				brand: nextProps.brand
			})
		}
		if(nextProps.regions){
			this.setState({ regions: nextProps.regions })
		}
	}

	componentDidMount() {
		ReactGA.initialize(process.env.GA_ID)
		setTimeout(()=>ReactGA.pageview(window.location.pathname + window.location.search))
	}

	_handleLang(lang){
		Cookies.set('lang', lang)
		this.setState({ lang })
	}
	
	render() {
		let content, sidebar, tab, footer, brand, navbar, navbarmb, menulist
		switch(this.state.lang) {
			case "en":
				content = require('../../static/language/en.json').brand
				footer = require('../../static/language/en.json').footer
				if(this.state.brand) {
					brand = {
						desc: this.state.brand.desc_en,
						menu: this.state.brand.menu_en
					}
				}
				break;
			case "cn":
				content = require('../../static/language/cn.json').brand
				footer = require('../../static/language/cn.json').footer
				if(this.state.brand) {
					brand = {
						desc: this.state.brand.desc_cn,
						menu: this.state.brand.menu_cn
					}
				}
				break;
			default:
				content = require('../../static/language/th.json').brand
				footer = require('../../static/language/th.json').footer
				if(this.state.brand) {
					brand = {
						desc: this.state.brand.desc_th,
						menu: this.state.brand.menu_th
					}
				}
				
		}
		sidebar = content.sidebar
		tab = content.tab
		navbar = content.navbar
		navbarmb = content.navbarmb
		menulist = content.menulist
		switch(this.state.brand_url) {
			case "tummour":
				content = content.tummour
				break;
			case "laoyuan":
				content = content.laoyuan
				break;
			case "jaewhon":
				content = content.jaewhon
				break;
			case "pho":
				content = content.pho
				break;
			case "granny":
				content = content.granny
				break;
			case "kruathai":
				content = content.kruathai
				break;
			case "detummour":
				content = content.detummour
				break;
			default:
				break;
		}

		if(!this.state.lang) return <div></div>
		return (
			<div>
				<Head title={"Tummour Original - "+content.title} />
				<Nav isActive="brands" handleLang={(lang)=>this._handleLang(lang)} navbar={navbar} navbarmb={navbarmb} />
				<BrandElement 
					content={content} 
					brand={brand} 
					regions={this.state.regions} 
					sidebar={sidebar}
					menulist={menulist} 
					tab={tab}
					lang={this.state.lang}
				/>
				<Footer footer={footer}/>
			</div>
		)
	}
}

const mapStateToProps = ({ brand }) => {
	return {
		brand: brand.brand,
		regions: brand.regions
	}
}

export default withRedux(initStore, mapStateToProps, { brandFetch, brandFetchAllRegion })(Kruathai)
