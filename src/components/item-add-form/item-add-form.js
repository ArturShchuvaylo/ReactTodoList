import React, { Component } from "react";
import "./item-add-form.css"
export default class ItemAddForm extends Component {

    state = {
        label: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        if ((this.state.label.split('').join(' ')) * 1 != 0) {
            this.props.onPush(this.state.label)
        }


        this.setState({ label: "" })
    }
    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className="form-control"
                    onChange={(event) => this.setState({ label: event.target.value })}
                    placeholder={'What else?'}
                    value={this.state.label}
                />
                <button
                    className="btn btn-otline-secondary"
                >Add
                </button>
            </form>
        )
    }
}

