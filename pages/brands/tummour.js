import React, { Component } from 'react'
import { Head, Nav, AllBanner, TummourElement, Footer } from '../components'

import '../../styles/index.scss'

class BrandTummour extends Component {
	render() {
		return (
			<div>
				<Head title="tummour original - tummour" />
				<Nav />
				<AllBanner source="https://firebasestorage.googleapis.com/v0/b/tummour-original.appspot.com/o/static%2Fimages%2F03-brands%2Fbanner.jpg?alt=media&token=fc39f037-937e-4bab-9e75-5173327490bb"/>
				<TummourElement />
				<Footer />
			</div>
		)
	}
}

export default BrandTummour;