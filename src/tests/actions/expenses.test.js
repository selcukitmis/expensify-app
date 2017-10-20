import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test("Should setup remove expense action onject", () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("Should setup edit expense action onject", () => {
    const action = editExpense('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: { note: "new note value" }
    });
});

test("Should setup add expense action onject with provided values", () => {

    const expenseData = {
        description: 'Rent',
        note: 'This was lsst months rent',
        amount: 109500,
        createAt: 1000
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test("Should setup add expense action onject with default values", () => {

    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createAt: 0
        }
    });
});