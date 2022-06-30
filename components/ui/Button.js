import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const Button = ({ children, onPress, style }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
		>
			<Text
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					color: colors.grayShades.gray50,
					fontSize: 10
				}}
			>
				{children}
			</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 6,
		elevation: 2,
		shadowColor: colors.primaryShades.primary800,
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.2
	},
	pressed: {
		opacity: 0.8
	}
});
