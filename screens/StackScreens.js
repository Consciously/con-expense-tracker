import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpenseScreen from './expenses/AddExpenseScreen';
import TabScreens from './TabScreens';

const StackScreens = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='TabScreens' component={TabScreens} />
			<Stack.Screen name='AddExpense' component={AddExpenseScreen} />
		</Stack.Navigator>
	);
};

export default StackScreens;
