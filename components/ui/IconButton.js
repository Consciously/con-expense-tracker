import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/colors';

const IconButton = ({ iconName, iconSize, onPress, style }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [pressed && styles.pressed]}
		>
			<View style={[styles.iconButton, style]}>
				<Ionicons name={iconName} size={iconSize} style={styles.icon} />
			</View>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	iconButton: {
		backgroundColor: colors.primaryShades.primary800,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		shadowColor: colors.primaryShades.primary800,
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.2
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
