import React from 'react';

function SearchBar({ searchValue, setSearchValue }) {
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Title or Channel"
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;
