import React from "react";

function SearchInput(props) {
  return (
      <input
        type="text"
        className="form-control"
        onChange={props.valueChangeHandler}
        value={props.value}
      />
  );
}

export default SearchInput;
