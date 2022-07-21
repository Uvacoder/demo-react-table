import React, { useState } from "react";

function SearchButton(props: any) {
  const clickToSearch = () => {
    props.onClick(props.value);
  };

  return (
    <button className="btn" onClick={clickToSearch} value={props.value}>
      Search
    </button>
  );
}

export default SearchButton;
