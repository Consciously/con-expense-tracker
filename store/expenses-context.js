import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	setExpenses: expenses => {},
	addExpense: expenseData => {},
	deleteExpense: id => {}
});

const ExpensesContextProvider = ({ children }) => {
	const expensesReducer = (state, action) => {
		switch (action.type) {
			case 'SET':
				return action.payload;
			case 'ADD':
				return [...state, action.payload];
			case 'DELETE':
				return state.filter(expense => expense.id !== action.payload);
			default:
				return state;
		}
	};

	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	const setExpenses = expenses => {
		dispatch({ type: 'SET', payload: expenses });
	};

	const addExpense = expenseData => {
		dispatch({ type: 'ADD', payload: expenseData });
	};

	const deleteExpense = id => {
		dispatch({ type: 'DELETE', payload: id });
	};

	const value = {
		expenses: expensesState,
		setExpenses,
		addExpense,
		deleteExpense
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
