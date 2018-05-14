import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter} 
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate} />
	)
})

test('Should render ExpenseListFilters correctly', () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render ExpenseListFilters correctly', () => {
	wrapper.setProps({filters: altFilters});
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render setTextFilter correctly', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target: {value}
	});

	expect(setTextFilter).toHaveBeenLastCalledWith(value);

})

test('Should sort by date', () => {
	const value = 'date';
	wrapper.setProps({filters: altFilters});
	wrapper.find('select').simulate('change', {
		target: {value}
	});

	expect(sortByDate).toHaveBeenCalled();

})

test('Should sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: {value}
	})

	expect(sortByAmount).toHaveBeenCalled();
})

test('Should handle date change', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');

	wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})

	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('Should handle focussed state', ()=> {
	const focusedInput = 'endDate' 
	wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput)

	expect(wrapper.state('focusedInput')).toBe(focusedInput);
})