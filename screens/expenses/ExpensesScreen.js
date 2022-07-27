import { useContext, useEffect, useState } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';
import { getExpenses } from '../../utils/firestore-crud';
import { db } from '../../utils/firebase-config';

const ExpensesScreen = () => {
	const [expenses, setExpenses] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		const expenseColRef = collection(db, 'expenses');
		const unsubscribe = onSnapshot(expenseColRef, snapshot => {
			setExpenses(
				snapshot.docs.map(doc => ({
					...doc.data(),
					expenseId: doc.id
				}))
			);
		});

		expensesCtx.setExpenses(expenses);
		setIsLoading(false);

		return () => unsubscribe();
	}, [expenses]);

	const errorHandler = () => {
		setError(null);
	};

	if (isLoading) {
		return <LoadingOverlay />;
	}

	if (error && !isLoading) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	return (
		<Layout>
			<ExpensesList expensesData={expensesCtx.expenses} />
		</Layout>
	);
};

export default ExpensesScreen;
