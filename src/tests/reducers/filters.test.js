import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('Should set sortBy to amount', () => {
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
})

test('Should set sortBy to date', () => {
	const defaultFilter = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	}

	const state = filtersReducer(defaultFilter, {type: 'SORT_BY_DATE'});
	expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'});
	expect(state.text).toBe('rent');
});

test('Should setStartDate filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0).add(4, 'days')});
	expect(state.startDate).toEqual(moment(0).add(4, 'days'));
});

test('Should setEndDate filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0).add(4, 'days')});
	expect(state.endDate).toEqual(moment(0).add(4, 'days'));
});

