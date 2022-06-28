import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

const ExpensesHeader = () => {
	return (
		<View style={styles.expensesHeaderContainer}>
			<Text style={styles.expensesHeaderText}>Name</Text>
			<Text style={styles.expensesHeaderText}>Date</Text>
			<Text style={styles.expensesHeaderText}>Quantity</Text>
			<Text style={styles.expensesHeaderText}>Amount</Text>
		</View>
	);
};

export default ExpensesHeader;

const styles = StyleSheet.create({
	expensesHeaderContainer: {
		height: 45,
		backgroundColor: colors.primaryShades.primary800,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 8,
		marginTop: 8,
		paddingVertical: 4,
		paddingHorizontal: 16
	},
	expensesHeaderText: {
		color: colors.grayShades.gray50,
		fontWeight: 'bold'
	},
	expenseItemsContainer: {
		marginHorizontal: 8,
		marginTop: 8,
		marginBottom: 70
	}
});
