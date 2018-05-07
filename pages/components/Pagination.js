import Link from 'next/link'
import React, { Component } from "react";
import Pagination from "react-js-pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={::this.handlePageChange}
        />
      </div>
    );
  }
}

export { Pagination }