import { createContext, useEffect, useState, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	setExpenses: expenses => {}
});

const ExpensesContextProvider = ({ children }) => {
	const expensesReducer = (state, action) => {
		switch (action.type) {
			case 'SET':
				return action.payload;
			default:
				return state;
		}
	};

	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	const setExpenses = expenses => {
		dispatch({ type: 'SET', payload: expenses });
	};

	const value = {
		expenses: expensesState,
		setExpenses
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
