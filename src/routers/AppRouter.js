import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header'
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={ExpenseDashboard} />
						<Route path='/create' component={AddExpensePage} />
						<Route path='/edit/:id' component={EditExpensePage} />
						<Route path='/help' component={HelpExpensePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}



export default AppRouter;