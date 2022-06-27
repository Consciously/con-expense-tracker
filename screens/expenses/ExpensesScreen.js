import ExpensesList from '../../components/expenses/ExpensesList';
import Layout from '../../components/ui/Layout';
import { expensesData } from '../../data/expensesData';

const ExpensesScreen = () => {
	return (
		<Layout>
			<ExpensesList expensesData={expensesData} />
		</Layout>
	);
};

export default ExpensesScreen;
