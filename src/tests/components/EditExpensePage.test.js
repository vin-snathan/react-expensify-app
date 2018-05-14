import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';

let editExpense, removeExpense, historySpy, wrapper;

beforeEach(() => {
     editExpense = jest.fn();
     removeExpense = jest.fn();
     historySpy = { push: jest.fn() };
     wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={historySpy} expense={expenses[2]} />)
});

test('Should render EditExpensePage correctly', () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith(expenses[2], expenses[2]);
})

test('should handle removeExpense', () => {
	wrapper.find('button').simulate('click');
	expect(historySpy.push).toHaveBeenLastCalledWith('/');
	expect(removeExpense).toHaveBeenLastCalledWith(expenses[2]);
})