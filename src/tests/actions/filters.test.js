import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('Set text filter with default values', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('Set text filter with default values', () => {
	const action = setTextFilter('rent');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'rent'
	});
});

test('Sort by amount', () => {
	expect(sortByAmount()).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('Sort by date', () => {
	expect(sortByDate()).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('Set start date', () => {
	expect(setStartDate(moment(0))).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
})

test('Set end date', () => {
	expect(setEndDate(moment(0))).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
})