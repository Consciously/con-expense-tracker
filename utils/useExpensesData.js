import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase-config';

export const useExpenseData = () => {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		const expensesQuery = query(collection(db, 'expenses'));

		const unsubscribe = onSnapshot(expensesQuery, snapshot => {
			setExpenses(
				snapshot.docs.map(doc => ({ expensesId: doc.id, data: doc.data() }))
			);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return expenses;
};
