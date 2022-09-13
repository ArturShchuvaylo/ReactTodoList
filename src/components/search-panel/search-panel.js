import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ""
    };
    onSearch = (event) => {
        const result = event.target.value;
        this.setState({ term: result });
        this.props.onSearchChange(result);
    }
    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={this.state.term}
                onChange={this.onSearch} />
        );
    }

};

