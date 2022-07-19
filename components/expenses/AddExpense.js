import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ExpensesContext } from '../../store/expenses-context';
import { colors } from '../../utils/colors';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { getFormattedDate } from '../../utils/date';
import ErrorOverlay from '../ui/ErrorOverlay';
import { storeExpense } from '../../utils/http';

const AddExpense = () => {
	const expensesCtx = useContext(ExpensesContext);
	const [inputs, setInputs] = useState({
		description: '',
		date: '',
		quantity: '',
		amount: ''
	});

	const [error, setError] = useState();

	const navigation = useNavigation();

	const inputsChangeHandler = (inputIdentifier, inputValue) => {
		setInputs(currentInput => {
			return {
				...currentInput,
				[inputIdentifier]: inputValue
			};
		});
	};

	const submitHandler = async () => {
		const expenseData = {
			description: inputs.description,
			date: inputs.date,
			quantity: +inputs.quantity,
			amount: +inputs.amount
		};

		console.log(expenseData);

		const descriptionIsValid = expenseData.description.trim().length > 0;
		const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
		const quantityIsValid =
			!isNaN(expenseData.quantity) && expenseData.quantity > 0;
		const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;

		if (
			!descriptionIsValid ||
			!dateIsValid ||
			!quantityIsValid ||
			!amountIsValid
		) {
			setError('You have to ether fill in the form or your inputs are invalid');
		} else {
			setInputs({
				description: '',
				date: '',
				quantity: '',
				amount: ''
			});

			const id = await storeExpense(expenseData);
			expensesCtx.addExpense({ ...expenseData, id });

			navigation.goBack();
		}
	};

	const errorHandler = () => {
		setError(null);
	};

	const cancelHandler = () => {
		navigation.goBack();
	};

	if (error) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	return (
		<ScrollView
			contentContainerStyle={styles.formContainer}
			keyboardShouldPersistTaps='handled'
			scrollEnabled={false}
		>
			<Input
				label='Description'
				inputConfig={{
					keyboardType: 'default',
					onChangeText: inputsChangeHandler.bind(this, 'description'),
					value: inputs.description
				}}
			/>
			<Input
				label='Date'
				inputConfig={{
					keyboardType: 'default',
					onChangeText: inputsChangeHandler.bind(this, 'date'),
					value: inputs.date
				}}
			/>
			<Input
				label='Quantity'
				inputConfig={{
					keyboardType: 'number-pad',
					onChangeText: inputsChangeHandler.bind(this, 'quantity'),
					value: inputs.quantity
				}}
			/>
			<Input
				label='Amount'
				inputConfig={{
					keyboardType: 'numeric',
					onChangeText: inputsChangeHandler.bind(this, 'amount'),
					value: inputs.amount
				}}
			/>
			<View style={styles.buttons}>
				<Button
					buttonColor='secondary'
					buttonSize='large'
					onPress={cancelHandler}
				>
					CANCEL
				</Button>
				<Button
					buttonColor='warning'
					buttonSize='large'
					onPress={submitHandler}
				>
					ADD EXPENSE
				</Button>
			</View>
		</ScrollView>
	);
};

export default AddExpense;

const styles = StyleSheet.create({
	formContainer: {
		paddingVertical: 4,
		paddingHorizontal: 8,
		margin: 20,
		backgroundColor: colors.primaryShades.primary500,
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4
	},
	buttons: {
		width: '100%',
		flexDirection: 'row',
		marginVertical: 8,
		justifyContent: 'space-evenly'
	},
	button: {
		flex: 1,
		height: 45,
		borderRadius: 4
	}
});
