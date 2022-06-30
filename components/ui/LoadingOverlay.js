import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const LoadingOverlay = () => {
	return (
		<View style={styles.overlayContainer}>
			<ActivityIndicator
				size={'large'}
				color={colors.primaryShades.primary800}
			/>
		</View>
	);
};

export default LoadingOverlay;

const styles = StyleSheet.create({
	overlayContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: colors.primaryShades.primary100
	}
});
