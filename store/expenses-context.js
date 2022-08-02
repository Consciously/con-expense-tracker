import { createContext, useEffect, useState, useReducer } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../utils/firebase-config';

export const ExpensesContext = createContext({
	expenses: [],
	getExpenses: () => {},
	addExpense: () => {},
	updateExpense: () => {},
	deleteExpense: () => {}
});

const ExpensesContextProvider = ({ children }) => {
	const [expensesData, setExpensesData] = useState([]);

	useEffect(() => {
		const expensesQuery = query(collection(db, 'expenses'));

		const unsubscribe = onSnapshot(expensesQuery, snapshot => {
			setExpensesData(
				snapshot.docs.map(doc => ({ expensesId: doc.id, ...doc.data() }))
			);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const expensesReducer = (action, state) => {
		switch (action.type) {
			default:
				return state;
		}
	};

	const [expenses, dispatch] = useReducer(expensesReducer, []);

	const addExpense = expense => {};
	const updateExpense = (expenseId, expense) => {};
	const deleteExpense = expenseId => {};

	const value = {
		expenses: expensesData,
		addExpense,
		updateExpense,
		deleteExpense
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
