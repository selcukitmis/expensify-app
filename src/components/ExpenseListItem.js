import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>

        </Link>
        <p>amount: {amount} - createAt: {createAt}</p>
    </div>
);

export default ExpenseListItem;