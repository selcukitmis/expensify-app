import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount).toString() : "",
            note: props.expense ? props.expense.note : "",
            createAt: props.expense ? moment(props.expense.createAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }

    onDescriptionChage = (e) => {
        this.setState({ description: e.target.value });
    };

    onAmountChage = (e) => {
        this.setState({ amount: e.target.value });
    };
    onDateChange = (createAt) => {
        if (createAt) {
            this.setState({ createAt });
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused });
    }

    onNoteChage = (e) => {
        //e.persist();
        this.setState({ note: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({ error: "Please provide description and amount." });
        }
        else {
            this.setState({ error: "" });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    defaultValue={this.state.description}
                    onChange={this.onDescriptionChage}
                />
                <input type="text"
                    className="text-input"
                    placeholder="Amount"
                    defaultValue={this.state.amount}
                    onChange={this.onAmountChage}
                />
                <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea placeholder="Add note (Optional )"
                    onChange={this.onNoteChage}
                    defaultValue={this.state.note}
                    className="textarea"
                >
                </textarea>
                <div>
                <button className="button">Save Expense</button>
                </div>
            </form>
        );
    }
}