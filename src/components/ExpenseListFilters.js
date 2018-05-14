import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends Component {
	constructor(props) {
		super(props);
		this.state = {focusedInput: null}
		this.handleSortBy = this.handleSortBy.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.onDatesChange = this.onDatesChange.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
	}

	handleSortBy(e) {
		e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate();
	}

	onDatesChange({startDate, endDate}) {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}

	onTextChange(e) {
		this.props.setTextFilter(e.target.value);
	}

	onFocusChange(focusedInput) {
		this.setState(() => ({focusedInput}));
	}

	render() {
		return (
			<div>
				<input type='text' value={this.props.filters.text} name='textFilter' onChange={this.onTextChange} />

				<select value={this.props.filters.sortBy} onChange={this.handleSortBy}>
				  <option value='amount'>Amount</option>
				  <option value='date'>Date</option>
				</select>

				<DateRangePicker
				  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
				  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
				  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
				  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
				  onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
				  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
				  numberOfMonths={1}
				  isOutsideRange={() => false}
				  showClearDates
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({filters: state.filters});

const mapDispatchToProps = (dispatch) => ({
	sortByAmount: () => {dispatch(sortByAmount())},
	sortByDate: () => {dispatch(sortByDate())},
	setStartDate: (startDate) => {dispatch(setStartDate(startDate))},
	setEndDate: (endDate) => {dispatch(setEndDate(endDate))},
	setTextFilter: (text) => {dispatch(setTextFilter(text))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);