import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './screens/StackScreens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExpensesContextProvider from './store/expenses-context';

const App = () => {
	LogBox.ignoreLogs(['Remote debugger']);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<StatusBar style='light' />
				<ExpensesContextProvider>
					<NavigationContainer>
						<StackScreens />
					</NavigationContainer>
				</ExpensesContextProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};
export default App;
