import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Card } from './components'

// import withRedux from 'next-redux-wrapper'
// import { initStore, bannerFetch } from '../actions'


import '../../styles/index.scss'

class Banner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imageStatus: 'loading'
		}
	}

	componentWillMount() {
		// this.props.bannerFetch();
	}

	handleImageLoaded() {
	    this.setState({ imageStatus: "loaded" });
	 }

	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Banners" />
				</div>

				
				<Card title="Banners" subTitle="Home page banner">
					<div className="bannerContainer">
						<div className="bannerImage" >
							{(this.state.imageStatus === "loading") ? <div>Loading...</div>: ""}
							<img 
								src="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F01-home%2Fbanner.jpg?alt=media&token=c15713cb-1ed0-4c9a-8822-db4f7eb231b3" 
								width="100%"
								onLoad={() => this.handleImageLoaded()}
							/>
						</div>
					</div>
				</Card>	
			    	
			</div>
		)
	}
}

// Banner.propTypes = {
//   loggedUser: PropTypes.object.isRequired
// }

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
