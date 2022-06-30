import { useNavigation } from '@react-navigation/native';
import IconButton from './ui/IconButton';
import Button from './ui/Button';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const CustomTabBarList = () => {
	const navigation = useNavigation();

	const tabBarButtonNavigationHandler = name => {
		switch (name) {
			case '7Days':
				navigation.navigate('Last7DaysExpenses');
				break;
			case '14Days':
				navigation.navigate('Last14DaysExpenses');
				break;
			case 'allDays':
				navigation.navigate('Expenses');
				break;
			case 'add':
				navigation.navigate('AddExpense');
				break;
			default:
				break;
		}
	};

	return (
		<>
			<View style={styles.tabBarLeft}>
				<Text style={styles.tabBarText}>Sorting by date</Text>
				<View style={styles.tabBarButtons}>
					<IconButton
						iconName='chevron-up-sharp'
						iconSize={40}
						style={{ height: 40, width: 40 }}
					/>
					<IconButton
						iconName='chevron-down-sharp'
						iconSize={40}
						style={{ height: 40, width: 40 }}
					/>
				</View>
			</View>
			<View style={styles.tabBarCenter}>
				<IconButton
					iconName='add-sharp'
					iconSize={40}
					style={{ height: 60, width: 60 }}
					onPress={tabBarButtonNavigationHandler.bind(this, 'add')}
				/>
			</View>
			<View style={styles.tabBarRight}>
				<Text style={styles.tabBarText}>Filtering last:</Text>
				<View style={styles.tabBarButtons}>
					<Button
						style={styles.tabBarButton}
						onPress={tabBarButtonNavigationHandler.bind(this, '7Days')}
					>
						7 Days
					</Button>
					<Button
						style={styles.tabBarButton}
						onPress={tabBarButtonNavigationHandler.bind(this, '14Days')}
					>
						14 Days
					</Button>
					<Button
						style={styles.tabBarButton}
						onPress={tabBarButtonNavigationHandler.bind(this, 'allDays')}
					>
						All Days
					</Button>
				</View>
			</View>
		</>
	);
};

export default CustomTabBarList;

const styles = StyleSheet.create({
	tabBarLeft: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabBarCenter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabBarRight: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabBarText: {
		color: colors.grayShades.gray50,
		fontWeight: 'bold',
		marginBottom: 4,
		textAlign: 'center',
		fontSize: 12
	},
	tabBarButtons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginRight: 0
	},
	tabBarButton: {
		borderRadius: 100,
		width: 45,
		height: 45,
		backgroundColor: colors.primaryShades.primary800
	}
});
