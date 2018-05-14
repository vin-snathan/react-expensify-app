import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
	<div>
		<h1> Expensify App </h1>
		<NavLink activeClassName='selected' exact to='/'>Expense Dashboard</NavLink>
		<NavLink activeClassName='selected' to='/create'>Create Expense</NavLink>
		<NavLink activeClassName='selected' to='/help'>Help</NavLink>
	</div>
);

export default Header;