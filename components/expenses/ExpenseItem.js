import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { getFormattedDate } from '../../utils/date';

const ExpenseItem = ({ name, date, quantity, amount }) => {
	return (
		<View style={styles.expenseItemOuter}>
			<View style={styles.expenseItemInner}>
				<View style={styles.expenseItemLeft}>
					<Text style={styles.expenseItemText}>{name}</Text>
				</View>
				<View style={styles.expenseIemRight}>
					<Text style={styles.expenseItemText}>{getFormattedDate(date)}</Text>
					<Text style={styles.expenseItemText}>{quantity}</Text>
					<Text style={styles.expenseItemText}>$ {amount}</Text>
				</View>
			</View>
		</View>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	expenseItemOuter: {
		backgroundColor: colors.primaryShades.primary500,
		marginBottom: 8,
		height: 60
	},
	expenseItemInner: {
		backgroundColor: colors.primaryShades.primary800,
		margin: 8,
		paddingVertical: 4,
		paddingHorizontal: 8,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	expenseItemLeft: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginRight: 8
	},
	expenseIemRight: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	expenseItemText: {
		color: colors.grayShades.gray50
	}
});
