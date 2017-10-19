import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>amount: {amount} - createAt: {createAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);