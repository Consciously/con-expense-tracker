import { useEffect, useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScreen from './expenses/ExpensesScreen';
import Last7DaysExpensesScreen from './expenses/Last7DaysExpensesScreen';
import Last14DaysExpensesScreen from './expenses/Last14DaysExpensesScreen';
import CustomTabBar from '../components/ui/CustomTabBar';
import { colors } from '../utils/colors';
import { fetchExpenses } from '../utils/http';

const Tab = createBottomTabNavigator();

const HeaderTabBar = ({ title, style }) => {
	return (
		<View style={style}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const TabScreens = () => {
	const expensesCtx = useContext(ExpensesContext);
	useEffect(() => {
		const getExpenses = async () => {
			try {
				const expenses = await fetchExpenses();
				expensesCtx.setExpenses(expenses);
			} catch (error) {
				console.log(error);
			}
		};

		getExpenses();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Tab.Navigator
				tabBar={() => <CustomTabBar />}
				screenOptions={{
					headerStyle: styles.headerContainer,
					header: ({ options: { title, headerStyle } }) => (
						<HeaderTabBar title={title} style={headerStyle} />
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
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default TabScreens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryShades.primary500
	},
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
