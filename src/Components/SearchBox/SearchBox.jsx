import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event);
        }}
      />
    </div>
  );
};

export default SearchBox;
