import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from './IconButton';
import Button from './Button';

const CustomTabBar = () => {
	const navigation = useNavigation();
	const route = useRoute();
	console.log(route);

	const navigationHandler = () => {
		navigation.navigate('AddExpense');
	};

	return (
		<View style={styles.tabBar}>
			<View style={styles.buttonsContainer}>
				<IconButton
					iconName='add-sharp'
					iconSize={40}
					onPress={navigationHandler}
				/>
				<Button onPress={() => {}}>7 Days</Button>
				<Button onPress={() => {}}>14 Days</Button>
				<Button onPress={() => {}}>All Days</Button>
			</View>
		</View>
	);
};

export default CustomTabBar;

const styles = StyleSheet.create({
	tabBar: {
		height: 140,
		backgroundColor: '#2B629E'
	},
	buttonsContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
