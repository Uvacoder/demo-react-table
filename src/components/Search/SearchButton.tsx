import React, { useState } from "react";

function SearchButton(props) {
  const [value, setValue] = useState("");

  return (
    <button className="btn" onClick={() => props.onSearch(value)}>
      {props.children}
    </button>
  );
}

export default SearchButton;
