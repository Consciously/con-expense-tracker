import { useContext } from 'react';
import { ExpensesContext } from '../../store/expenses-context-old';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

const ExpensesSummary = () => {
	const expensesCtx = useContext(ExpensesContext);

	const expensesCount = expensesCtx.expenses?.reduce(
		(expenses, expenseItem) => {
			return expenses + expenseItem.amount;
		},
		0
	);

	return (
		<View style={styles.expensesSummaryContainer}>
			<View style={styles.expenseSummaryLeft}>
				<Text style={styles.expensesSummaryText}>Summary</Text>
			</View>
			<View style={styles.expensesSummaryRight}>
				<Text style={styles.expensesSummaryText}>
					$ {expensesCount.toFixed(2)}
				</Text>
			</View>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	expensesSummaryContainer: {
		height: 45,
		backgroundColor: colors.primaryShades.primary800,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 8,
		marginBottom: 8,
		paddingVertical: 4,
		paddingHorizontal: 16
	},
	expensesSummaryText: {
		color: colors.grayShades.gray50,
		fontWeight: 'bold'
	},
	expenseSummaryLeft: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginRight: 8
	},
	expensesSummaryRight: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
