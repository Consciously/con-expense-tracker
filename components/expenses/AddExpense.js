import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ExpensesContext } from '../../store/expenses-context';
import { colors } from '../../utils/colors';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { storeExpense } from '../../utils/http';

const AddExpense = () => {
	const expensesCtx = useContext(ExpensesContext);
	const [inputs, setInputs] = useState({
		description: '',
		date: '',
		quantity: '',
		amount: ''
	});
	const navigation = useNavigation();

	const inputsChangeHandler = (inputIdentifier, inputValue) => {
		setInputs(currentInput => {
			return {
				...currentInput,
				[inputIdentifier]: { value: inputValue }
			};
		});
	};

	const submitHandler = async () => {
		const expenseData = {
			description: inputs.description.value,
			date: inputs.date.value,
			quantity: +inputs.quantity.value,
			amount: +inputs.amount.value
		};

		setInputs({
			description: '',
			date: '',
			quantity: '',
			amount: ''
		});

		const id = await storeExpense(expenseData);
		expensesCtx.addExpense({ ...expenseData, id });

		navigation.goBack();
	};

	const cancelHandler = () => {
		navigation.goBack();
	};

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
					value: inputs.description.value
				}}
			/>
			<Input
				label='Date'
				inputConfig={{
					keyboardType: 'default',
					onChangeText: inputsChangeHandler.bind(this, 'date'),
					value: inputs.date.value
				}}
			/>
			<Input
				label='Quantity'
				inputConfig={{
					keyboardType: 'number-pad',
					onChangeText: inputsChangeHandler.bind(this, 'quantity'),
					value: inputs.quantity.value
				}}
			/>
			<Input
				label='Amount'
				inputConfig={{
					keyboardType: 'numeric',
					onChangeText: inputsChangeHandler.bind(this, 'amount'),
					value: inputs.amount.value
				}}
			/>
			<View style={styles.buttons}>
				<Button
					style={[
						styles.button,
						{ backgroundColor: colors.grayShades.grayRed, marginRight: 4 }
					]}
					onPress={cancelHandler}
				>
					CANCEL
				</Button>
				<Button
					style={[
						styles.button,
						{ backgroundColor: colors.grayShades.gray500, marginLeft: 4 }
					]}
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
