import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';
import { getExpenses } from '../../utils/firebase-crud';

const ExpensesScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		const listExpenses = async () => {
			setIsLoading(true);
			try {
				const expenses = await getExpenses();
				expensesCtx.setExpenses(expenses);
				setIsLoading(false);
			} catch (error) {
				setError(
					`${error.message} - Could not retrieve expenses from database`
				);
			}
		};
		setIsLoading(false);

		listExpenses();
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
