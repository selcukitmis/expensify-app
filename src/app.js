import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Dest", amount: 240, createAt: 500 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 150, createAt: 100 }));

store.dispatch(setTextFilter(""));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("state", state);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
