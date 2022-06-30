import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import Button from './Button';

const ErrorOverlay = ({ message, onConfirm }) => {
	return (
		<View style={styles.errorOverlay}>
			<Text style={[styles.errorText, styles.errorTitle]}>
				An Error occurred
			</Text>
			<Text style={styles.errorText}>{message}</Text>
			<Button onPress={onConfirm} style={styles.errorButton}>
				OK
			</Button>
		</View>
	);
};

export default ErrorOverlay;

const styles = StyleSheet.create({
	errorOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryShades.primary100,
		padding: 24
	},
	errorText: {
		color: colors.primaryShades.primary800,
		marginBottom: 16,
		textAlign: 'center'
	},
	errorTitle: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	errorButton: {
		backgroundColor: colors.primaryShades.primary800,
		color: colors.grayShades.gray50,
		width: 45,
		height: 45,
		borderRadius: 4
	}
});
