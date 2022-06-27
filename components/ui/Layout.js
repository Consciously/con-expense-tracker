import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

const Layout = ({ children }) => {
	return (
		<View style={styles.expensesContainer}>
			<View style={styles.expensesHeaderContainer}>
				<Text style={styles.expensesHeaderText}>Name</Text>
				<Text style={styles.expensesHeaderText}>Date</Text>
				<Text style={styles.expensesHeaderText}>Quantity</Text>
				<Text style={styles.expensesHeaderText}>Amount</Text>
			</View>
			<View style={styles.expenseItemsContainer}>{children}</View>
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
	expensesHeaderContainer: {
		height: 60,
		backgroundColor: colors.primaryShades.primary800,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 8,
		marginTop: 8,
		paddingVertical: 4,
		paddingHorizontal: 8
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
