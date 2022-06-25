import { Button, StyleSheet, Text, View } from 'react-native';

const AddExpenseScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is the add expense screen</Text>
			<Button
				title='Cancel'
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</View>
	);
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2B629E'
	}
});
