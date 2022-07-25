import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	setExpenses: expenses => {},
	addExpense: expenseData => {},
	deleteExpense: id => {},
	updateExpense: (id, expenseData) => {}
});

const ExpensesContextProvider = ({ children }) => {
	const expensesReducer = (state, action) => {
		switch (action.type) {
			case 'SET':
				return action.payload;
			case 'ADD':
				return [...state, action.payload];
			case 'DELETE':
				return state.filter(expense => expense.expenseId !== action.payload);
			case 'UPDATE':
				const updateableExpenseIndex = state.findIndex(
					expense => expense.expenseId === action.payload.expenseId
				);

				const updateableExpense = state[updateableExpenseIndex];

				const updatedItem = {
					...updateableExpense,
					...action.payload.expenseData
				};

				const updatedExpenses = [...state];

				updatedExpenses[updateableExpenseIndex] = updatedItem;
				console.log(updatedExpenses);

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

	const deleteExpense = expenseId => {
		dispatch({ type: 'DELETE', payload: expenseId });
	};

	const updateExpense = (expenseId, expenseData) => {
		dispatch({ type: 'UPDATE', payload: { expenseId, expenseData } });
	};

	const value = {
		expenses: expensesState,
		setExpenses,
		addExpense,
		deleteExpense,
		updateExpense
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
