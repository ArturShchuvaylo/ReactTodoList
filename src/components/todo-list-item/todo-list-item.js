import React, { Component } from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onDelete, id, important, markDownImportant, done, markDownDone }) => {

    let clazz = "todo-list-item";
    if (important) {
        clazz += "  important"
    }
    if (done) {
        clazz += "  done"
    }
    return (
        <span className={clazz}>
            <span onClick={markDownDone}
                className="todo-list-item-label"
            >
                {label}
            </span>

            <button onClick={markDownImportant} type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>

            <button onClick={onDelete} type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );

}

export default TodoListItem;