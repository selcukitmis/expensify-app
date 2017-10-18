import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
            break;
        case "REMOVE_EXPENSE":
            return state.filter((item) => item.id !== action.id);
            break;
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates }
                }
                else {
                    return expense;
                }
            });
            break;
        default:
            return state;
            break;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text }
            break;
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" }
            break;
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" }
            break;
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate }
            break;
        case "SET_END_DATE":
            return { ...state, endDate: action.endDate }
            break;
        default:
            return state;
            break;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createAt < b.createAt ? 1 : -1
        }
        else if(sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createAt: 111000 }))
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 25, createAt: 11000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 45 }));

 store.dispatch(setTextFilter("co"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByDate());
 store.dispatch(sortByAmount());

store.dispatch(setStartDate(150));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


// const user = {
//     name: "Selçuk",
//     age: 29
// };

// console.log({ ...user, location: "İstanbul", age: 30 });