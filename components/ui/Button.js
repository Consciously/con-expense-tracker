import { ExpensesContext } from '../../store/expenses-context';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const Button = ({ children, onPress, buttonColor, buttonSize, isCircle }) => {
	const buttonStyles = [styles.button];

	const buttonTextStyle = [styles.text];

	switch (buttonColor) {
		case 'primary':
			buttonStyles.push(styles.primary);
			buttonTextStyle.push(styles.textLight);
			break;
		case 'secondary':
			buttonStyles.push(styles.secondary);
			buttonTextStyle.push(styles.textLight);
			break;
		case 'warning':
			buttonStyles.push(styles.warning);
			buttonTextStyle.push(styles.textDark);
		default:
			break;
	}

	switch (buttonSize) {
		case 'large':
			buttonStyles.push(styles.large);
			buttonTextStyle.push({ fontSize: 14 });
			break;
		case 'medium':
			buttonStyles.push(styles.medium);
			buttonTextStyle.push({ fontSize: 12 });
			break;
		case 'small':
			buttonStyles.push(styles.small);
			buttonTextStyle.push({ fontSize: 10 });
			break;
		case 'square':
			buttonStyles.push(styles.square);
			buttonTextStyle.push({ fontSize: 10 });
			break;
		default:
			break;
	}

	if (isCircle) {
		buttonStyles.push(styles.circle);
	}

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [pressed && styles.pressed, buttonStyles]}
		>
			<Text style={buttonTextStyle}>{children}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.2,
		marginHorizontal: 8
	},
	text: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	textLight: {
		color: colors.grayShades.gray50
	},
	textDark: {
		color: colors.primaryShades.primary800
	},
	large: {
		width: 135,
		paddingVertical: 16,
		paddingHorizontal: 8
	},
	medium: {
		width: 90,
		paddingVertical: 8,
		paddingHorizontal: 4
	},
	small: {
		width: 45,
		paddingVertical: 4,
		paddingHorizontal: 2
	},
	square: {
		width: 45,
		padding: 8,
		width: 45,
		height: 45
	},
	circle: {
		borderRadius: 50
	},
	primary: {
		backgroundColor: colors.primaryShades.primary800
	},
	secondary: {
		backgroundColor: colors.grayShades.gray500
	},
	warning: {
		backgroundColor: colors.grayShades.grayRed
	},
	pressed: {
		opacity: 0.8
	}
});
