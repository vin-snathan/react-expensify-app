import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should correctly render ExpenseSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesSummary={234} />);
	expect(wrapper).toMatchSnapshot();
})

test('Should correctly render ExpenseSummary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesSummary={23343434} />);
	expect(wrapper).toMatchSnapshot();
})