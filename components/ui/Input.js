import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../utils/colors';

const Input = ({ label, onChangeText, onBlur, value }) => {
	return (
		<View style={styles.inputControl}>
			<Text style={styles.inputLabel}>{label}</Text>
			<TextInput
				style={styles.inputText}
				onChangeText={onChangeText}
				onBlur={onBlur}
				value={value}
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputControl: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 4,
		marginHorizontal: 8
	},
	inputLabel: {
		color: colors.grayShades.gray50,
		fontWeight: 'bold',
		marginBottom: 8,
		marginRight: 8
	},
	inputText: {
		backgroundColor: colors.primaryShades.primary200,
		borderColor: colors.primaryShades.primary800,
		borderWidth: 3,
		borderRadius: 4,
		color: colors.grayShades.gray50,
		width: '100%',
		paddingVertical: 8,
		paddingHorizontal: 16
	}
});
