import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

import { getFormattedDate } from './date';

export const getExpenses = async () => {
	const expenseColRef = collection(db, 'expenses');

	const expensesSnapshot = await getDocs(expenseColRef);
	return expensesSnapshot.docs.map(doc => ({
		expenseId: doc.id,
		amount: doc.data().amount,
		// createdAt: doc.data().createdAt.toDate(),
		description: doc.data().description,
		quantity: doc.data().quantity
	}));
};

export const addExpense = async expenseData => {
	const expenseColRef = collection(db, 'expenses');
	return addDoc(expenseColRef, { ...expenseData });
};

// export const deleteExpense = async () => {
// 	return deleteDoc(doc(db, 'expenses'));
// };
