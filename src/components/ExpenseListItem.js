import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>

        </Link>
        <p>amount: {numeral(amount).format('0.0[00]')} - createAt: {moment(createAt).format("ll")}</p>
    </div>
);

export default ExpenseListItem;