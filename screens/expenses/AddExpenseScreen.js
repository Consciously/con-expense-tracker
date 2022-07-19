import { StyleSheet, View } from 'react-native';
import AddExpenseFormik from '../../components/expenses/AddExpenseFormik';
import { colors } from '../../utils/colors';

const AddExpenseScreen = () => {
	return (
		<View style={styles.container}>
			<AddExpenseFormik />
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
