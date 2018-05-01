import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Sidebar, Header, Card } from './components'

// import withRedux from 'next-redux-wrapper'
// import { initStore, bannerFetch } from '../actions'


import '../../styles/index.scss'

class Banner extends Component {
	componentWillMount() {
		// this.props.bannerFetch();
	}

	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Banners" />
				</div>

				<div className="contentAdmin">
					<Header title="Banners" user="Admin" />

					<div className="bannerAdmin">
						<div className="row">
							<Card title="Banners" subTitle="Home page banner">
								
								<div className="content">
									<div className="bannerContainer">
										<div className="bannerImage" >
											<img src="/static/images/banner/banner1.jpg" width="100%"/>
										</div>
										<div className="bannerImage" >
											<img src="/static/images/banner/banner1.jpg" width="100%"/>
										</div>
										<div className="bannerImage" >
											<img src="/static/images/banner/banner1.jpg" width="100%"/>
										</div>
										<div className="bannerImage" >
											<img src="/static/images/banner/banner1.jpg" width="100%"/>
										</div>
									</div>
								</div>

							</Card>
						</div>
					</div>
				</div>
			    	
			</div>
		)
	}
}

Banner.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

// {this.props.banners.map(item => {
// 			    	return <img key={item.banner_name} style={{width: '100%'}} src={item.banner_scr} alt={item.banner_tag}/>
// 			    })
// const mapStateToProps = ({ banner }) => {
// 	return {
// 		banners: banner.banners
// 	}
// }
// }


// export default withRedux(initStore, mapStateToProps, { bannerFetch })(securePage(Home))
export default Banner
