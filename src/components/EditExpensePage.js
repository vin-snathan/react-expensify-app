import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	onSubmit(expense) {
		this.props.editExpense(this.props.expense, expense); 
		this.props.history.push('/');
	}
	
	handleRemove() {
		this.props.removeExpense(this.props.expense);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<h1>Edit Expense Page</h1>
				<ExpenseForm {...this.props.expense} onSubmit={this.onSubmit} />
				<button onClick={this.handleRemove}>Remove</button>
			</div>
		)
	}

}

const mapStateToProps = (state, props) => ({expense: state.expenses.find(({id}) => id === props.match.params.id)})

const mapDispatchToProps = (dispatch) => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);