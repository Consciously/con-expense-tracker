import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';

const ExpensesScreen = () => {
	const expensesCtx = useContext(ExpensesContext);
	return (
		<Layout>
			<ExpensesList expensesData={expensesCtx.expenses} />
		</Layout>
	);
};

export default ExpensesScreen;
