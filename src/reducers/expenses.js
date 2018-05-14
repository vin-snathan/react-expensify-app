const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(el => el.id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(el => el.id === action.id ? {...el, ...action.expense} : el);
		default:
			return state;
	}
}