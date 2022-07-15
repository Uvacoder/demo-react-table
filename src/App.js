import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Table from "./Table/Table";
import TableSearch from "./TableSearch/TableSearch";
import _ from "lodash";
import "./styles.css";
import data from './data.json';

class App extends Component {
  state = {
    data: data,
    search: "",
    sort: "asc",
    sortField: "id",
    row: null,
    currentPage: 0,
  };

  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField });
  };


  pageChangeHandler = ({ selected }) =>
    this.setState({ currentPage: selected });

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    var result = data.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.state.data;
    }
    return result;
  }

  render() {
    const pageSize = 20;

    const filteredData = this.getFilteredData();
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    return (
      <div className="container">
        {(
          <React.Fragment>
            <TableSearch onSearch={this.searchHandler} />
            <Table
              data={displayData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
            />
          </React.Fragment>
        )}

        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
