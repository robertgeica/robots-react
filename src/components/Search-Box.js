import React from 'react';
import '../styles/search-box.css';


const SearchBox = ({placeholder, handleSearch}) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearch}

    />
)

export default SearchBox;