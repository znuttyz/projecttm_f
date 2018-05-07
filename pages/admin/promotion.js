import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Header, Card, Table } from './components'

import '../../styles/index.scss'

class Promotion extends Component {
	render() {
		return (
			<div className="wrapperAdmin">

				<div className="sidebarAdmin">
					<Sidebar active="Promotions" />
				</div>

				<div className="contentAdmin">
					<Header title="Promotions" user={"tmp"} />

					<Card title="Promotions" subTitle="All Promotions">
						
						<Table />

					</Card>
					
				</div>
						
			    	
			</div>
		)
	}
}

export default Promotion
