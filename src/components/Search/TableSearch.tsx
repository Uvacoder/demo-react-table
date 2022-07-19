import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function TableSearch(props: any) {
  const [value, setValue] = useState("");

  const valueChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

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
        onChange={valueChangeHandler}
        value={value}
      />
    </div>
  );
}

export default TableSearch;
