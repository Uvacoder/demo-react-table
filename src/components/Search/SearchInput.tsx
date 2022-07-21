import React, {useState} from "react";

function SearchInput(props) {
  const [value, setValue] = useState("");

  const valueChangeHandler = (event: any) => {
    setValue(event.target.value);
  };
  return (
      <input
        type="text"
        className="form-control"
        onChange={valueChangeHandler}
        value={value}
      />
  );
}

export default SearchInput;
