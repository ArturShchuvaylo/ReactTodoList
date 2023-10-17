import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ visible, onDelete, markDownImportant, markDownDone }) => {

    let elements = visible.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    markDownDone={() => markDownDone(item.id,)}
                    markDownImportant={() => markDownImportant(item.id)}
                    onDelete={() => onDelete(item.id)} {...item} />
            </li>
        )
    }
    )
    return (
        <ul className="list-group todo-list">

            {elements}

        </ul>
    );
};

export default TodoList;