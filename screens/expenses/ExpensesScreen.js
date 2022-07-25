import { useContext, useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';
import { db } from '../../utils/firebase-config';

const ExpensesScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		setIsLoading(true);
		const getExpenses = () => {
			try {
				onValue(ref(db, '/expenses'), querySnapshot => {
					const data = querySnapshot.val() || {};
					const expensesData = { ...data };

					const expenses = [];

					for (const key in expensesData) {
						const expensesObj = {
							expenseId: key,
							description: expensesData[key].description,
							createdAt: expensesData[key].createdAt,
							amount: expensesData[key].amount,
							quantity: expensesData[key].quantity
						};

						expenses.push(expensesObj);
					}

					expensesCtx.setExpenses(expenses);
					setIsLoading(false);
				});
			} catch (error) {
				setError(`${error.message} - Cannot fetch expenses from database`);
				setIsLoading(false);
			}
		};
		getExpenses();
	}, []);

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
