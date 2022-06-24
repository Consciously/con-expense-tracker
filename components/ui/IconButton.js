import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName, iconSize, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [pressed && styles.pressed]}
		>
			<View style={styles.iconButton}>
				<Ionicons name={iconName} size={iconSize} style={styles.icon} />
			</View>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	iconButton: {
		backgroundColor: '#122840',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		width: 75,
		height: 75
	},
	icon: {
		color: '#F5F6F7',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	pressed: {
		opacity: 0.8
	}
});
