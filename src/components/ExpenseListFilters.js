import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={(e) => {
                    console.log(e.target.value);
                    props.dispatch(setTextFilter(e.target.value));
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        let selectedValue = e.target.value;
                        if (selectedValue === "date") {
                            this.props.dispatch(sortByDate());
                        }
                        else {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>

                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>

        );
    }
}


const mapStateToProps = state => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);