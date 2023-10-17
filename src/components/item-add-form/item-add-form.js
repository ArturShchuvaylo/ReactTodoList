import React, { Component, useState } from "react";
import "./item-add-form.css"
import uuid from 'react-uuid';
const ItemAddForm = ({ addItem }) => {

    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addItem(value)
        setValue('');
    }


    return (

        <form
            onSubmit={onSubmit}
            className="item-add-form d-flex">
            <input
                type='text'
                className="form-control"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={'What else?'}
            />
            <button
                className="btn btn-otline-secondary"

            >
                Add
            </button>
        </form >

    )

}

export default ItemAddForm;

