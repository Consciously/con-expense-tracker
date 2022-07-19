import { useContext } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { colors } from '../../utils/colors';
import { storeExpense } from '../../utils/http';

const AddExpenseFormik = () => {
	const expensesCtx = useContext(ExpensesContext);
	const navigation = useNavigation();
	const cancelHandler = () => {
		navigation.goBack();
	};

	const submitHandler = async expenseValues => {
		const formattedDate = moment().format('YYYY-MM-DD');

		const expenseData = {
			description: expenseValues.description,
			quantity: +expenseValues.quantity,
			amount: +expenseValues.amount,
			createdAt: formattedDate
		};

		const id = await storeExpense(expenseData);
		expensesCtx.addExpense({ ...expenseData, id });

		navigation.goBack();
	};

	const ExpenseValidationSchema = Yup.object().shape({
		description: Yup.string().required('Required').min(2, 'Too Short'),
		quantity: Yup.number('Only integers are allowed')
			.required('Required')
			.positive()
			.integer(),
		amount: Yup.number('Only numbers are allowed')
			.required('Required')
			.positive()
	});

	return (
		<Formik
			initialValues={{ description: '', quantity: '', amount: '' }}
			validationSchema={ExpenseValidationSchema}
			onSubmit={submitHandler}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched
			}) => {
				return (
					<ScrollView
						contentContainerStyle={styles.formContainer}
						keyboardShouldPersistTaps='handled'
						scrollEnabled={false}
					>
						<Input
							label='Description'
							onChangeText={handleChange('description')}
							onBlur={handleBlur('description')}
							value={values.description}
						/>
						{errors.description && touched.description && (
							<View>
								<Text>{errors.description}</Text>
							</View>
						)}
						<Input
							label='Quantity'
							onChangeText={handleChange('quantity')}
							onBlur={handleBlur('quantity')}
							value={values.quantity}
						/>
						{errors.quantity && touched.quantity && (
							<View>
								<Text>{errors.quantity}</Text>
							</View>
						)}
						<Input
							label='Amount'
							onChangeText={handleChange('amount')}
							onBlur={handleBlur('amount')}
							value={values.amount}
						/>
						{errors.amount && touched.amount && (
							<View>
								<Text>{errors.amount}</Text>
							</View>
						)}
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
								onPress={handleSubmit}
							>
								ADD EXPENSE
							</Button>
						</View>
					</ScrollView>
				);
			}}
		</Formik>
	);
};

export default AddExpenseFormik;

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
