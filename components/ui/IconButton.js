import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName, iconSize, onPress }) => {
	return (
		<Pressable onPress={onPress} style={styles.iconButton}>
			<Ionicons name={iconName} size={iconSize} style={styles.icon} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	iconButton: {
		backgroundColor: '#122840',
		height: 75,
		width: 75,
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		color: '#F5F6F7'
	}
});
