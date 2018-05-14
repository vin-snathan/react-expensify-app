import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, historySpy, wrapper;

beforeEach(() => {
     addExpense = jest.fn();
     historySpy = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage addExpense={addExpense} history={historySpy} />)
});

test('Should render AddExpensePage correctly', () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})

