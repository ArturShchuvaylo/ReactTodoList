import React, { Component } from 'react';

import './item-status-filter.css';


const ItemStatusFilter = ({ filter, onChangeFilter }) => {

    const arr = [
        { status: 'all', name: 'All' },
        { status: 'active', name: 'Active' },
        { status: 'done', name: 'Done' }
    ]
    const buttons = arr.map(({ status, name }) => {
        const isActive = status === filter;
        const claz = isActive ? 'btn btn-info' : "btn btn-outline-secondary";
        return (
            <button
                className={claz}
                onClick={() => onChangeFilter(status)}
            >{name}</button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );

}

export default ItemStatusFilter;