import React, { useState } from "react";

function TableSearch(props: any) {
  const [value, setValue] = useState("");

  const valueChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <button className="btn" onClick={() => props.onSearch(value)}>
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        onChange={valueChangeHandler}
        value={value}
      />
    </div>
  );
}

export default TableSearch;
