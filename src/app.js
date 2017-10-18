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

const store = configureStore();

store.dispatch(addExpense({ description: "Dest", amount: 240, createAt: 500 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 150, createAt: 100 }));
store.dispatch(addExpense({ description: "ADest", amount: 1240, createAt: 1500 }));
store.dispatch(addExpense({ description: "AGas Bill", amount: 1150, createAt: 1100 }));

setTimeout(() => {
    store.dispatch(setTextFilter("gas"));
}, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log("state", state);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById("app"));
ReactDOM.render(jsx, document.getElementById("app"));