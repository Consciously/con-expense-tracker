import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import ExpensesSummary from '../expenses/ExpensesSummary';
import ExpensesHeader from './ExpensesHeader';

const Layout = ({ children }) => {
	return (
		<View style={styles.expensesContainer}>
			<ExpensesHeader />
			<View style={styles.expenseItemsContainer}>{children}</View>
			<ExpensesSummary />
		</View>
	);
};

export default Layout;

const styles = StyleSheet.create({
	expensesContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: colors.primaryShades.primary100
	},
	expenseItemsContainer: {
		flex: 1,
		margin: 8
	}
});
