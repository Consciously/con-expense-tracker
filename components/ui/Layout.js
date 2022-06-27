import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils/colors';

const Layout = ({ children }) => {
	return <View style={styles.expensesContainer}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
	expensesContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary500
	}
});
