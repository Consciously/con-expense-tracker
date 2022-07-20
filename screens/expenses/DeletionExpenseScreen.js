import { useContext, useState } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import Button from '../../components/ui/Button';
import { deleteExpense } from '../../utils/http';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

const DeletionExpenseScreen = ({ navigation, route }) => {
	const [error, setError] = useState();
	const expenseIdParam = route.params?.expenseId;
	const expenseCtx = useContext(ExpensesContext);

	const selectedExpense = expenseCtx.expenses.find(
		expense => expense.expenseId === expenseIdParam
	);

	const cancelHandler = () => {
		navigation.goBack();
	};

	const deleteHandler = async () => {
		try {
			expenseCtx.deleteExpense(selectedExpense.expenseId);
			deleteExpense(selectedExpense.expenseId);
			navigation.goBack();
		} catch (error) {
			setError(`${error.message} - Cannot delete expense`);
		}
	};

	const errorHandler = () => {
		setError(null);
	};

	if (error && !isLoading) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.warningContainer}>
				<Text style={[styles.warningText, styles.warningTextHeader]}>
					Delete Expense '{selectedExpense?.description}'
				</Text>
				<Text style={styles.warningText}>Are you sure?</Text>
			</View>
			<View style={styles.buttons}>
				<Button
					buttonColor='warning'
					buttonSize='large'
					onPress={deleteHandler}
				>
					Yes
				</Button>
				<Button
					buttonColor='secondary'
					buttonSize='large'
					onPress={cancelHandler}
				>
					No
				</Button>
			</View>
		</View>
	);
};

export default DeletionExpenseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary100
	},
	buttons: {
		flexDirection: 'row'
	},
	warningContainer: {
		backgroundColor: colors.primaryShades.primary500,
		padding: 16,
		marginBottom: 16
	},
	warningTextHeader: {
		fontSize: 24
	},
	warningText: {
		color: colors.grayShades.gray100,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});
