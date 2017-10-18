import React, { Component } from 'react';

const ExpenseListItem = ({ description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>amount: {amount} - createAt: {createAt}</p>
    </div>
);

export default ExpenseListItem;