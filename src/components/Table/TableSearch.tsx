import React, { useState } from "react";
import SearchButton from "../Search/SearchButton";
import SearchInput from "../Search/SearchInput";

function TableSearch(props: any) {
  const [value, setValue] = useState("");

  const handleValueChange = (value) => {
    setValue(value);
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <SearchButton onClick={props.onSearch(value)} value={value} />
      </div>
      <SearchInput onChange={handleValueChange} value={value} />
    </div>
  );
}

export default TableSearch;
