import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = props => (
    <div>
        <input type="text" defaultValue={props.filters.text} onChange={(e) => {
            console.log(e.target.value);
            props.dispatch(setTextFilter(e.target.value));
        }} />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                let selectedValue = e.target.value;
                if (selectedValue === "date") {
                    props.dispatch(sortByDate());
                }
                else {
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>

        </select>
    </div>
);

const mapStateToProps = state => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);