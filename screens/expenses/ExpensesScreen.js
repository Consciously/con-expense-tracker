import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import { fetchExpenses } from '../../utils/http';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

const ExpensesScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);
	useEffect(() => {
		setIsLoading(true);
		const getExpenses = async () => {
			try {
				const expenses = await fetchExpenses();
				expensesCtx.setExpenses(expenses);
			} catch (error) {
				setError(`${error.message} - Cannot fetch expenses from database`);
			}

			setIsLoading(false);
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
