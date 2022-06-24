import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseScreen from './screens/ExpenseScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import Last7DaysExpenseScreen from './screens/Last7DaysExpenseScreen';
import Last14DaysExpenseScreen from './screens/Last14DaysExpenseScreen';
import { Button, Pressable, Text, View, StyleSheet } from 'react-native';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const CustomTabBar = () => {
	const navigation = useNavigation();

	const navigationHandler = () => {
		navigation.navigate('AddExpense');
	};

	return (
		<View style={styles.container}>
			<IconButton
				iconName='add-sharp'
				iconSize={80}
				onPress={navigationHandler}
			/>
		</View>
	);
};

export const TabScreens = () => {
	return (
		<Tab.Navigator tabBar={() => <CustomTabBar />}>
			<Stack.Screen name='Expenses' component={ExpenseScreen} />
			<Tab.Screen name='Last7DaysExpenses' component={Last7DaysExpenseScreen} />
			<Tab.Screen
				name='Last14DaysExpenses'
				component={Last14DaysExpenseScreen}
			/>
		</Tab.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='TabScreens' component={TabScreens} />
				<Stack.Screen
					name='AddExpense'
					component={AddExpenseScreen}
					options={{
						presentation: 'transparentModal'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
