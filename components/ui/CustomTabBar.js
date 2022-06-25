import { View, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import CustomTabBarList from '../CustomTabBarList';

const CustomTabBar = () => {
	return (
		<View style={styles.tabBarContainer}>
			<CustomTabBarList />
		</View>
	);
};

export default CustomTabBar;

const styles = StyleSheet.create({
	tabBarContainer: {
		height: 120,
		backgroundColor: colors.primaryShades.primary500,
		flexDirection: 'row',
		paddingVertical: 16,
		paddingHorizontal: 8
	}
});
