import React, { Component } from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel';

class Analytics extends Component {

	componentDidMount() {
		// console.log(window.location.pathname + window.location.search)
		// ReactGA.initialize(process.env.GA_ID2)
		ReactGA.initialize([{ trackingId: process.env.GA_ID, gaOptions: { name: 'tracker1' } }, 
							{ trackingId: process.env.GA_ID2, gaOptions: { name: 'tracker2' } }])
		ReactPixel.init(process.env.FB_PIXEL_ID);
		setTimeout(()=> {
			ReactGA.pageview(window.location.pathname + window.location.search, ['tracker1', 'tracker2'])
			ReactPixel.pageView()
		})
	}

	render() {
		return <div></div>
	}
}

export { Analytics }