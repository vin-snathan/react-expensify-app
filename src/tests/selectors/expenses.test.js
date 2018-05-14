import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Filter by text filter', () => {
	const filters = {text: 'e', sortBy: 'date', startDate: undefined, endDate: undefined}
	const action = selectExpenses(expenses, filters);

	expect(action).toEqual([
		expenses[2], expenses[1] 
	])

});

test('Filter by startDate filter', () => {
	const filters = {text: '', sortBy: 'date', startDate: moment(0), endDate: undefined}
	const action = selectExpenses(expenses, filters);

	expect(action).toEqual([
		expenses[2], expenses[0] 
	])

});

test('Filter by endDate filter', () => {
	const filters = {text: '', sortBy: 'date', startDate: undefined, endDate: moment(0).add(2, 'days')}
	const action = selectExpenses(expenses, filters);

	expect(action).toEqual([
		expenses[0], expenses[1] 
	])

});

test('Filter by date filter', () => {
	const filters = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}
	const action = selectExpenses(expenses, filters);

	expect(action).toEqual([
		expenses[2], expenses[0], expenses[1] 
	])

});

test('Filter by amount filter', () => {
	const filters = {text: '', sortBy: 'amount', startDate: undefined, endDate: undefined}
	const action = selectExpenses(expenses, filters);

	expect(action).toEqual([
		expenses[1], expenses[2], expenses[0] 
	])

});