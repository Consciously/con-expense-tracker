import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ children, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Text style={{ textAlign: 'center', color: '#F5F6F7', fontSize: 13 }}>
				{children}
			</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#122840',
		height: 50,
		width: 50,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 6
	},
	pressed: {
		opacity: 0.8
	}
});
