import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	setExpenses: expenses => {},
	addExpense: expenseData => {}
});

const ExpensesContextProvider = ({ children }) => {
	const expensesReducer = (state, action) => {
		switch (action.type) {
			case 'SET':
				return action.payload;
			case 'ADD':
				return [...state, action.payload];
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

	const value = {
		expenses: expensesState,
		setExpenses,
		addExpense
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
