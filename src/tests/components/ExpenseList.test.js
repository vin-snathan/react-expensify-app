import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render expense list with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render expense list with empty expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
})