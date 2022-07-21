import React, { useState } from "react";

function SearchInput(props: any) {
  const valueChangeHandler = (e: any) => {
    props.onChange(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      onChange={valueChangeHandler}
      value={props.value}
    />
  );
}

export default SearchInput;
