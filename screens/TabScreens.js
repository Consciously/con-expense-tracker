import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScreen from './expenses/ExpensesScreen';
import Last7DaysExpensesScreen from './expenses/Last7DaysExpensesScreen';
import Last14DaysExpensesScreen from './expenses/Last14DaysExpensesScreen';
import DeletionExpenseScreen from './expenses/DeletionExpenseScreen';
import CustomTabBar from '../components/ui/CustomTabBar';
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

const Header = ({ title, style }) => {
	return (
		<View style={style}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const TabScreens = () => {
	return (
		<Tab.Navigator
			tabBar={() => <CustomTabBar />}
			screenOptions={{
				headerStyle: styles.headerContainer,
				header: ({ options: { title, headerStyle } }) => (
					<Header title={title} style={headerStyle} />
				)
			}}
		>
			<Tab.Screen
				name='Expenses'
				component={ExpensesScreen}
				options={{
					title: 'All Expenses'
				}}
			/>
			<Tab.Screen
				name='Last7DaysExpenses'
				component={Last7DaysExpensesScreen}
				options={{
					title: 'Last 7 Days'
				}}
			/>
			<Tab.Screen
				name='Last14DaysExpenses'
				component={Last14DaysExpensesScreen}
				options={{
					title: 'Last 14 Days'
				}}
			/>
			<Tab.Screen
				name='DeletionExpense'
				component={DeletionExpenseScreen}
				options={{ title: 'Delete Expense' }}
			/>
		</Tab.Navigator>
	);
};

export default TabScreens;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		height: 60,
		backgroundColor: colors.primaryShades.primary500,
		elevation: 0,
		shadowOpacity: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		color: colors.grayShades.gray50,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 24
	}
});
