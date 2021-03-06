import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
 
export const ExpensesSummary = ({expenseCount, expensesTotal}) =>{
	const formattedTotalExpense = numeral(expensesTotal/100).format('$0,0.00');
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

	return (
		<div>
			<h2>Viewing {expenseCount} {expenseWord} totalling {formattedTotalExpense}</h2>
		</div>
	)
}

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses)
	};
}

export default connect(mapStateToProps)(ExpensesSummary);