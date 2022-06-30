import { StyleSheet, View } from 'react-native';
import AddExpense from '../../components/expenses/AddExpense';
import { colors } from '../../utils/colors';

const AddExpenseScreen = () => {
	return (
		<View style={styles.container}>
			<AddExpense />
		</View>
	);
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary100
	}
});
