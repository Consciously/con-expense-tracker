import { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpensesContext } from '../../store/expenses-context';
import Layout from '../../components/ui/Layout';
import ExpensesList from '../../components/expenses/ExpensesList';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import ErrorOverlay from '../../components/ui/ErrorOverlay';
import { colors } from '../../utils/colors';

const ExpensesScreen = () => {
	const [expenses, setExpenses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		setExpenses(expensesCtx.expenses);
	}, []);

	console.log(expenses);

	// let content = '';

	// if (expenses && expenses.length === 0) {
	// 	content = `<View style={styles.errorOverlay}>
	// 			<Text style={[styles.emptyText, styles.emptyTitle]}>Ooooops</Text>
	// 			<Text style={styles.emptyText}>No Expenses found!</Text>
	// 		</View>`;
	// 	setIsLoading(false);
	// }

	// if (expenses && expenses.length > 0) {
	// 	content = `<Layout>
	// 	<ExpensesList expenses={expenses} />
	// </Layout>`;
	// 	setIsLoading(false);
	// }

	// if (!expenses) {
	// 	setError('Could not retrieve expenses from database');
	// 	setIsLoading(false);
	// }

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
			<ExpensesList expenses={expenses} />
		</Layout>
	);
};

export default ExpensesScreen;

const styles = StyleSheet.create({
	emptyOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary100,
		padding: 24
	},
	emptyText: {
		color: colors.primaryShades.primary800,
		marginBottom: 16,
		textAlign: 'center'
	},
	emptyTitle: {
		fontSize: 24,
		fontWeight: 'bold'
	}
});
