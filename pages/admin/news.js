import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Header, Card, Table } from './components'

import '../../styles/index.scss'

class News extends Component {
	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="News" />
				</div>

				<div className="contentAdmin">
					<Header title="News" user={"tmp"} />

					<Card title="News" subTitle="List of News">
						
						<Table />

					</Card>

				</div>
						
			    	
			</div>
		)
	}
}

export default News
