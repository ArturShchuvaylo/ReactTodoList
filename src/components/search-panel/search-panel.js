import React, { Component } from 'react';
import { useState } from 'react';

import './search-panel.css';

const SearchPanel = ({ onChackSearch }) => {

    const [search, setSearch] = useState('');


    const onChangeSearch = (e) => {
        const result = e.target.value
        setSearch(result);
        onChackSearch(result)
    }

    return (
        <input type="text"
            value={search}
            onChange={onChangeSearch}
            className="form-control search-input"
            placeholder="type to search"
        />
    );
};

export default SearchPanel;

