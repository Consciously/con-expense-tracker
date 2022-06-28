import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './screens/StackScreens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExpensesContextProvider from './store/expenses-context';

const App = () => {
	return (
		<SafeAreaProvider>
			<StatusBar style='light' />
			<ExpensesContextProvider>
				<NavigationContainer>
					<StackScreens />
				</NavigationContainer>
			</ExpensesContextProvider>
		</SafeAreaProvider>
	);
};
export default App;
