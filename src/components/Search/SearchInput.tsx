import React from "react";

function SearchInput({ onChange, value }) {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => onChange(e.target.value)}
            value={value}
        />
    );
}

export default SearchInput;
