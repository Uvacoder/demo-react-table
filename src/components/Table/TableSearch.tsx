import React, { useState } from "react";
import SearchButton from "../Search/SearchButton";
import SearchInput from "../Search/SearchInput";

function TableSearch(props: any) {

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <SearchButton className="btn" onClick={() => props.onSearch(value)}>
          Search
        </SearchButton>
      </div>
      <SearchInput
        type="text"
        className="form-control"
      />
    </div>
  );
}

export default TableSearch;
