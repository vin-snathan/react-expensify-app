import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from './selectors/expenses';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

console.log(moment().startOf('month'));
console.log(moment().endOf('month'));

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='container'>
					<AppRouter />
				</div>
			</Provider>
		);
	}
}

export default App;