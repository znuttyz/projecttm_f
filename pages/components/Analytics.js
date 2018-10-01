import React, { Component } from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel';

class Analytics extends Component {

	componentDidMount() {
		console.log(window.location.pathname + window.location.search)
		ReactGA.initialize(process.env.GA_ID)
		ReactPixel.init(process.env.FB_PIXEL_ID);
		setTimeout(()=> {
			ReactGA.pageview(window.location.pathname + window.location.search)
			ReactPixel.pageView()
		})
	}

	render() {
		return <div></div>
	}
}

export { Analytics }