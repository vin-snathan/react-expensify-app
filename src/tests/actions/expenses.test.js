import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Test add expense with no values, expect object containing default values', () => {
	expect(addExpense()).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});

test('Should setup add expense action object', () => {
	const expenseData = {description: 'Rent', amount: '109500', createdAt: 1000, note: 'This was last month rent'}
	const action = addExpense(expenseData);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('Remove Expense', () => {
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Edit Expense', () => {
	const expenseToEdit = {description: 'coffee', amount: 1000}
	const action = editExpense({id: '123abc'}, expenseToEdit);

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		expense: expenseToEdit
	});
});