import { Text, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {
	return (
		<View>
			<Text>This is a expenses list</Text>
			<ExpenseItem />
		</View>
	);
};

export default ExpensesList;
