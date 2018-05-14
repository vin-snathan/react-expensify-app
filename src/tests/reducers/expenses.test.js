import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Test default expensesReducer', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test('Should remove expense by valid ID', () => {
	const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id}
	const state = expensesReducer(expenses, action);
	
	expect(state).toEqual([
		expenses[0], expenses[2]
	]);
});

test('Should remove expense by invalid ID', () => {
	const action = {type: 'REMOVE_EXPENSE', id: '-1'}
	const state = expensesReducer(expenses, action);
	
	expect(state).toEqual(expenses);
});

test('Should add expense', () => {
	const action = {type: 'ADD_EXPENSE', expense: {id: '109', description: 'Coffee', note: '', amount: 2000, createdAt: 21050}}
	const state = expensesReducer(undefined, action);

	expect(state).toEqual([action.expense]);
});

test('Should edit expense', () => {
	const action = {type: 'EDIT_EXPENSE', id: '2', expense: {description: 'Coffee'}}
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], {...expenses[1], ...action.expense}, expenses[2]]);
});

test('Should not edit expense', () => {
	const action = {type: 'EDIT_EXPENSE', id: '23', expense: {description: 'Coffee'}}
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});