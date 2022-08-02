import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ExpensesContext } from '../../store/expenses-context-old';
import ExpenseForm from '../../components/expenses/ExpenseForm';
import { colors } from '../../utils/colors';
// import { updateExpense } from '../../utils/http';
import { addExpense, updateExpense } from '../../utils/firestore-crud';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

const ManageExpenseScreen = ({ route, navigation }) => {
	const [error, setError] = useState();
	const expenseCtx = useContext(ExpensesContext);
	const expenseIdParam = route.params?.expenseId;
	const isEditing = !!expenseIdParam;

	const selectedExpense = expenseCtx.expenses.find(
		expense => expense.expenseId === expenseIdParam
	);

	const errorHandler = () => {
		setError(null);
	};

	const cancelHandler = () => {
		navigation.goBack();
	};

	const submitHandler = async expenseData => {
		if (isEditing) {
			try {
				await updateExpense(expenseData, selectedExpense.expenseId);
				navigation.goBack();
			} catch (error) {
				setError(`${error.message} - Could not store expense`);
			}
		} else {
			try {
				await addExpense(expenseData);
				navigation.goBack();
			} catch (error) {
				setError(`${error.message} - Could not store expense`);
			}
		}
	};

	if (error) {
		<ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				submitButtonLabel={isEditing ? 'UPDATE' : 'ADD'}
				defaultValues={selectedExpense}
				onEditMode={isEditing}
				onCancel={cancelHandler}
				onSubmit={submitHandler}
			/>
		</View>
	);
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary100
	}
});
