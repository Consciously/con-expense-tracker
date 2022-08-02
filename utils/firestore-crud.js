import {
	query,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	updateDoc,
	doc
} from 'firebase/firestore';
import { db } from './firebase-config';

export const getExpenses = () => {
	const expenseQuery = query(collection(db, 'expenses'));

	return () =>
		onSnapshot(expenseQuery, snapshot => {
			snapshot.docs.map(doc => ({
				...doc.data(),
				expenseId: doc.id
			}));
		});
};

export const addExpense = async expenseData => {
	const expenseColRef = collection(db, 'expenses');
	return addDoc(expenseColRef, { ...expenseData });
};

export const updateExpense = async (expenseData, expenseId) => {
	const expenseDocRef = doc(db, 'expenses', expenseId);

	return updateDoc(expenseDocRef, expenseData);
};

export const deleteExpense = async expenseId => {
	const expenseDocRef = doc(db, 'expenses', expenseId);

	return deleteDoc(expenseDocRef);
};
