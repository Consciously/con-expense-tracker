import {
	query,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc
} from 'firebase/firestore';
import { db } from './firebase-config';

export const getExpenses = () => {
	const expenseColRef = collection(db, 'expenses');

	const unsub = onSnapshot(expenseColRef, snapshot => {
		snapshot.docs.map(doc => ({
			...doc.data(),
			expenseId: doc.id
		}));
	});

	return () => unsub();
};

export const addExpense = async expenseData => {
	const expenseColRef = collection(db, 'expenses');
	return addDoc(expenseColRef, { ...expenseData });
};

export const deleteExpense = async expenseId => {
	const expenseDocRef = doc(db, 'expenses', expenseId);

	return deleteDoc(expenseDocRef);
};
