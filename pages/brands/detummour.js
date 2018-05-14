import React, { Component } from 'react'
import { Head, Nav, AllBanner, DetummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandDetummour extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - de tummour" />
				<Nav />
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fbanner.jpg?alt=media&token=fc39f037-937e-4bab-9e75-5173327490bb"/>
				<DetummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandDetummour;