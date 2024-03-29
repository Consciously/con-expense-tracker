import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import ManageExpenseScreen from './expenses/ManageExpenseScreen';
import TabScreens from './TabScreens';

import { colors } from '../utils/colors';

const Header = ({ title, style }) => {
	return (
		<View style={style}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const isEditingHandler = expenseIdParam => {
	const isEditing = !!expenseIdParam;

	return isEditing;
};

const StackScreens = () => {
	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='TabScreens' component={TabScreens} />
				<Stack.Screen
					name='ManageExpense'
					component={ManageExpenseScreen}
					options={({ route }) => {
						const expenseIdParam = route.params?.expenseId;

						const isEditing = isEditingHandler(expenseIdParam);

						return {
							title: isEditing ? 'Update Expense' : 'Add Expense',
							headerShown: true,
							headerStyle: styles.headerContainer,
							header: ({ options: { title, headerStyle } }) => (
								<Header title={title} style={headerStyle} />
							)
						};
					}}
				/>
			</Stack.Navigator>
		</SafeAreaView>
	);
};

export default StackScreens;

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
