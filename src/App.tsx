import React, { useState, useMemo } from "react";
import _ from "lodash";

import Table from "./components/Table";
import TableSearch from "./components/TableSearch";
import Pagination from "./components/Pagination";
import Users from "./generated.json";
import "./styles/styles.scss";

function App() {
  const [data, setData] = useState(Users);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);

  const onSort = (sortField: any) => {
    const cloneData = data.concat();
    const sortType = sort === "asc" ? "desc" : "asc";
    const rows = _.orderBy(cloneData, sortField, sort);

    setData(rows);
    setSort(sortType);
    setSortField(sortField);
  };

  const searchHandler = (search: any) => {
    setSearch(search);
    setCurrentPage(0);
  };

  const getFilteredData = () => {
    if (!search) {
      return data;
    }

    let result = data.filter((item: any) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase()) ||
        item["phone"].toLowerCase().includes(search.toLowerCase())
      );
    });

    if (!result.length) {
      result = data;
    }

    return result;
  };

  const pageSize = 15;

  const filteredData = getFilteredData();
  const displayData = _.chunk(filteredData, pageSize)[currentPage]

  console.log(currentPage);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="container">
      <TableSearch onSearch={searchHandler} />
      <Table
        data={displayData}
        onSort={onSort}
        sort={sort}
        sortField={sortField}
      />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
