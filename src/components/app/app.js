import React, { Component, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from '../item-add-form/item-add-form';

const data = [
    {
        id: uuid(),
        label: 'Aquir real state!',
        important: false,
        done: false
    },
    {
        id: uuid(),
        label: 'Say a prayer',
        important: false,
        done: false
    },
    {
        id: uuid(),
        label: 'Cheel!',
        important: false,
        done: false
    },
]
const App = () => {
    const [list, setList] = useState(data);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all')



    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(list))
    }, [list])

    const onDelete = (id) => {
        let newList = list.filter((elem) => elem.id !== id);
        setList(newList);
    }

    const markDownImportant = (id) => {
        const newList = list.map(item => {
            if (item.id === id) {
                item.important = !item.important;
            }
            return item;
        })
        setList(newList);
    }

    const markDownDone = (id) => {
        const newList = list.map(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return item;
        })
        setList(newList);
    }

    const addItem = (item) => {
        const obj = {
            id: uuid(),
            label: item,
            important: false,
            done: false
        }

        setList((prev) => [...prev, obj])


    }

    const onSearch = (arr, value) => {
        if (value.length === 0) {
            return arr;
        }
        return arr.filter(item => item.label.indexOf(value) > -1)
    }

    const onChackSearch = (ter) => {
        setTerm(ter);
    }

    const onChangeFilter = (filter) => {
        setFilter(filter);

    }
    const onFilter = (arr, filter) => {
        switch (filter) {
            case 'all':
                return arr;

            case 'done':
                return arr.filter(item => item.done);

            case 'active':
                return arr.filter(item => !item.done);


            default:
                return arr;
        }
    }

    const done = (list.filter(elem => elem.done)).length
    const toDo = list.length - done;

    let visible = onFilter(onSearch(list, term), filter);
    return (
        <div className="todo-app">
            <AppHeader done={done} toDo={toDo} />
            <div className="top-panel d-flex">
                <SearchPanel onChackSearch={onChackSearch}
                />
                <ItemStatusFilter onChangeFilter={onChangeFilter} filter={filter}
                />
            </div>
            <TodoList
                visible={visible}
                markDownDone={markDownDone}
                markDownImportant={markDownImportant}
                setList={setList}
                onDelete={onDelete}
            />
            <ItemAddForm addItem={addItem} />
        </div>
    )

};

export default App;