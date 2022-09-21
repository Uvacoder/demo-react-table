import _ from "lodash";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Pagination2 from "./components/Pagination2/Pagination2";
import Table from "./components/Table/Table";
import TableSearch from "./components/Table/TableSearch";
import Users from "./generated.json";
import "./styles/styles.scss";
import { getPageCount } from "./utils/pages";

function App() {
    const [data, setData] = useState(Users);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [sortField, setSortField] = useState("id");
    const [currentPage, setCurrentPage] = useState(1);

    const [totalPages, setTotalPages] = useState(0);
    const limit = 15;

    useEffect(() => {
        const totalCount = data.length;
        setTotalPages(getPageCount(totalCount, limit));
    }, [])

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
        setCurrentPage(1);
    };

    const getFilteredData = () => {
        if (!search) {
            return data;
        }

        let result = data.filter((item: any) => {
            return (
                item["firstName"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
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

    function changePage(page) {
        setCurrentPage(page);
    }


    const filteredData = getFilteredData();
    const displayData = _.chunk(filteredData, 15)[currentPage - 1];

    return (
        <div className="container">
            <TableSearch search={search} setSearch={searchHandler} />
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
                pageSize={15}
                onPageChange={changePage}
            />
            {/* <Pagination2
                page={currentPage}
                changePage={changePage}
                totalPages={totalPages}
            /> */}
        </div>
    );
}

export default App;
