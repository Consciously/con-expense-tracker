import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './screens/StackScreens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
	return (
		<SafeAreaProvider>
			<StatusBar style='light' />
			<NavigationContainer>
				<StackScreens />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};
export default App;
