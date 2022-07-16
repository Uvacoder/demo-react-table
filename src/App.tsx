// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactPaginate from "react-paginate";
// @ts-expect-error TS(6142): Module './components/Table' was resolved to '/home... Remove this comment to see the full error message
import Table from "./components/Table";
// @ts-expect-error TS(6142): Module './components/TableSearch' was resolved to ... Remove this comment to see the full error message
import TableSearch from "./components/TableSearch";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import _ from "lodash";
import "./styles/styles.css";
// @ts-expect-error TS(2732): Cannot find module './generated.json'. Consider us... Remove this comment to see the full error message
import Users from "./generated.json";

function App() {
  const [data, setData] = useState(Users);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("id");
  const [currentPage, setCurrentPage] = useState(0);

  const onSort = (sortField: any) => {
    const cloneData = Users.concat();
    const sortPuck = sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);
    setData(data);
    setSort(sortPuck);
    setSortField(sortField);
  };

  const pageChangeHandler = ({
    selected
  }: any) => setCurrentPage(selected);

  const searchHandler = (search: any) => {
    setSearch(search);
    setCurrentPage(0);
  };

  const getFilteredData = () => {
    if (!search) {
      return data;
    }

    var result = data.filter((item: any) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });

    if (!result.length) {
      result = data;
    }

    return result;
  };

  const pageSize = 15;

  const filteredData = getFilteredData();
  const pageCount = Math.ceil(filteredData.length / pageSize);
  const displayData = _.chunk(filteredData, pageSize)[currentPage];

  return (
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="container">
      {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <React.Fragment>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableSearch onSearch={searchHandler} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Table
            data={displayData}
            onSort={onSort}
            sort={sort}
            sortField={sortField}
          />
        </React.Fragment>
      }

      {data.length > pageSize ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageChangeHandler}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={currentPage}
        />
      ) : null}
    {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </div>
  );
}

export default App;
