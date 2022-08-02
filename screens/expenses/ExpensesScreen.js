import { useContext, useState, useEffect } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

const ExpensesScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		if (expensesCtx.expenses.length > 0) {
			setIsLoading(false);
		} else {
			setError(new Error('Could not retrieve expenses from database'));
		}
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
			<ExpensesList />
		</Layout>
	);
};

export default ExpensesScreen;
