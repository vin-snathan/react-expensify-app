import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class ExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {description: props.description || '', amount: props.amount ? (props.amount/100).toString() : '', note: props.note || '', createdAt: moment(props.createdAt) || moment(), calendarFocused: false, error: ''};
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onAmountChange = this.onAmountChange.bind(this);
		this.onNoteChange = this.onNoteChange.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onDescriptionChange(e) {
		const description = e.target.value;
		this.setState(() => ({description}))
	}

	onAmountChange(e) {
		const amount = e.target.value;
		if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({amount}));
		}
	}

	onNoteChange(e) {
		const note = e.target.value;
		this.setState(() => ({note}))
	}

	onDateChange(createdAt) {
		this.setState(() => ({createdAt}))
	}

	onFocusChange({focused}) {
		this.setState(() => ({calendarFocused: focused}));
	}

	onFormSubmit(e) {
		e.preventDefault();

		if(!this.state.description || !this.state.amount) {
			this.setState(() => ({error: 'Please provide description and amount'}))
		} else {
			this.setState(() => ({error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p style={{color: 'red'}}> {this.state.error} </p>}
				<form onSubmit={this.onFormSubmit}>
					<input type='text' placeholder='Description' value={this.state.description} onChange={this.onDescriptionChange} autoFocus />
					<input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
					<SingleDatePicker
					  date={this.state.createdAt} // momentPropTypes.momentObj or null
					  onDateChange={this.onDateChange} // PropTypes.func.isRequired
					  focused={this.state.calendarFocused} // PropTypes.bool
					  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
					  isOutsideRange={() => false}
					  numberOfMonths={1}
					/>
					<textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onNoteChange}></textarea>
					<button type='submit'> Add Expense </button>
				</form>
			</div>
		);
	}
} 

export default ExpenseForm;