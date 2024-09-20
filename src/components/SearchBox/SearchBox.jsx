import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid/non-secure";
import "./SearchBox.css";

const SearchBox = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <div className="filter">
      <label htmlFor={searchId}>Find contact by name </label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
