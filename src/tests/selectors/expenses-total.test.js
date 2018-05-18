import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
	const res = selectExpensesTotal([]);
	expect(res).toBe(0);
})

test('Should return value of one expenses', () => {
	const res = selectExpensesTotal([expenses[0]]);
	expect(res).toBe(195);
})

test('Should return total value of all expenses', () => {
	const res = selectExpensesTotal(expenses);
	expect(res).toBe(114195);
})