import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
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
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Description"
                        autoFocus
                        defaultValue={this.state.description}
                        onChange={this.onDescriptionChage}
                    />
                    <input type="text"
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
                    >

                    </textarea>
                    <button>Add Expense</button>

                </form>
            </div>
        );
    }
}