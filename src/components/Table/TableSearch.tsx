import React, { useState } from "react";
import SearchInput from "../Search/SearchInput";

function TableSearch({ search, setSearch }) {
    return (
        <div className="input-group">
            <SearchInput value={search} onChange={setSearch} />
        </div>
    );
}

export default TableSearch;
