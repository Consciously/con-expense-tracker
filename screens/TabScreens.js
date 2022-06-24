import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseScreen from './expenses/ExpenseScreen';
import Last7DaysExpenseScreen from './expenses/Last7DaysExpenseScreen';
import Last14DaysExpenseScreen from './expenses/Last14DaysExpenseScreen';
import CustomTabBar from '../components/ui/CustomTabBar';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
	return (
		<Tab.Navigator tabBar={() => <CustomTabBar />}>
			<Tab.Screen name='Expenses' component={ExpenseScreen} />
			<Tab.Screen name='Last7DaysExpenses' component={Last7DaysExpenseScreen} />
			<Tab.Screen
				name='Last14DaysExpenses'
				component={Last14DaysExpenseScreen}
			/>
		</Tab.Navigator>
	);
};

export default TabScreens;
