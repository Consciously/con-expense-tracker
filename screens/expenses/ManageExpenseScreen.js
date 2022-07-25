import { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpensesContext } from '../../store/expenses-context';
import ExpenseForm from '../../components/expenses/ExpenseForm';
import { colors } from '../../utils/colors';
import { storeExpense, updateExpense } from '../../utils/http';
import ErrorOverlay from '../../components/ui/ErrorOverlay';

import { db } from '../../utils/firebase-config';

const ManageExpenseScreen = ({ route, navigation }) => {
	useEffect(() => {
		return onValue(ref(db, '/expenses'), querySnapshot => {
			let data = querySnapshot.val() || {};
			let expenseItems = { ...data };

			console.log(expenseItems);
		});
	}, []);
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
				expenseCtx.updateExpense(selectedExpense.expenseId, expenseData);
				await updateExpense(selectedExpense.expenseId, expenseData);
				navigation.goBack();
			} catch (error) {
				setError(`${error.message} - Could not store expense`);
			}
		} else {
			try {
				expenseCtx.addExpense(expenseData);
				await storeExpense(expenseData);
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
