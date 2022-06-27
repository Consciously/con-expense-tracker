import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItems = itemData => {
	return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expensesData }) => {
	return (
		<FlatList
			data={expensesData}
			renderItem={renderExpenseItems}
			keyExtractor={item => item.expenseId}
		>
			<ExpenseItem />
		</FlatList>
	);
};

export default ExpensesList;
