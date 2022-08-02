import { useContext } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import { FlatList, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItems = itemData => {
	return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
	// const expensesCtx = useContext(ExpensesContext);

	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItems}
			keyExtractor={item => item.expensesId}
		/>
	);
};

export default ExpensesList;
