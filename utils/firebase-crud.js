import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getFormattedDate } from './date';

export const getExpenses = async () => {
	const expensesCollection = collection(db, 'expenses');
	const expenseSnapshot = await getDocs(expensesCollection);

	const expenseList = expenseSnapshot.docs.map(doc => ({
		expensesId: doc.id,
		amount: doc.data().amount,
		createdAt: getFormattedDate(doc.data().createdAt.toDate()),
		description: doc.data().description,
		quantity: doc.data().quantity
	}));

	return expenseList;
};
