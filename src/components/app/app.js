import React, { Component } from 'react';
import uuid from 'react-uuid';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from '../item-add-form/item-add-form';

export default class App extends Component {
    //....
    state = {
        todoData: [
            this.createElement('Drink Coffee'),
            this.createElement('Make Awesome App'),
            this.createElement('Have a lunch'),
        ],
        term: '',
        filter: "",
    }
    createElement(text) {
        return {
            label: text,
            important: false,
            id: uuid(),
            done: false,
        }

    }

    removeItem = (id) => {
        this.setState(({ todoData }) => {
            // let newArray = todoData.filter((elem) => id !== elem.id)
            const idx = todoData.findIndex(element => element.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(element => element.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    addItem = (text) => {
        let itemTodoData = this.createElement(text);
        if (itemTodoData.label.length > 0) {
            this.setState(({ todoData }) => {
                return {
                    todoData: [...todoData, itemTodoData]
                }
            })
        }

    }
    search(arr, term) {
        if (term.length === 0) {
            return arr;
        }
        return arr.filter(el => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    filterAct(arr, filter) {
        switch (filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter(elem => !elem.done);
            case 'done':
                return arr.filter(elem => elem.done);
            default:
                return arr;
        }
    }

    onSearchChange = (text) => {
        this.setState({ term: text })
    };

    filterChange = (filter) => {
        this.setState({ filter });
    }
    render() {
        const { todoData, term, filter } = this.state;

        const visibleItem = this.filterAct(this.search(todoData, term), filter)

        const doneCount = todoData.filter((elem) => elem.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        onFilterChange={this.filterChange}
                        filter={filter} />
                </div>

                <TodoList
                    todos={visibleItem}
                    onDeleted={this.removeItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />

                <ItemAddForm onPush={this.addItem} />
            </div>
        )
    }
};

