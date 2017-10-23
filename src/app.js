import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ id: 1, description: "First 20", amount: 10.50, createAt: 500000,note:"note 1" }));
store.dispatch(addExpense({ id: 2, description: "Second 20", amount: 20, createAt: 100,note:"note 2" }));
// store.dispatch(addExpense({ id: 3, description: "Thirth 30", amount: 30, createAt: 1500 }));
// store.dispatch(addExpense({ id: 4, description: "Fourth 40", amount: 40, createAt: 1100 }));
//store.dispatch(setTextFilter("des"));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log("state", state);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById("app"));
ReactDOM.render(jsx, document.getElementById("app"));