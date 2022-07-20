import { ExpensesContext } from '../../store/expenses-context';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming
} from 'react-native-reanimated';
import { colors } from '../../utils/colors';
import EditButtons from '../EditButtons';

const ExpenseItem = ({
	expenseId,
	description,
	createdAt,
	quantity,
	amount
}) => {
	const navigation = useNavigation();

	const END_POSITION = -300;
	const onRight = useSharedValue(true);
	const position = useSharedValue(0);

	const panGesture = Gesture.Pan()
		.onUpdate(e => {
			if (onRight.value) {
				position.value = e.translationX;
			} else {
				position.value = END_POSITION + e.translationX;
			}
		})
		.onEnd(e => {
			if (position.value < END_POSITION / 2) {
				position.value = withTiming(END_POSITION, { duration: 100 });
				onRight.value = false;
			} else {
				position.value = withTiming(0, { duration: 100 });
				onRight.value = true;
			}
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: position.value }]
	}));

	return (
		<View style={styles.expenseItemOuter}>
			<EditButtons onNavigation={navigation} expenseId={expenseId} />
			<GestureDetector gesture={panGesture}>
				<Animated.View style={[styles.expenseItemInner, animatedStyle]}>
					<View style={styles.expenseItemLeft}>
						<Text style={styles.expenseItemText}>{description}</Text>
					</View>
					<View style={styles.expenseIemRight}>
						<Text style={styles.expenseItemText}>{createdAt}</Text>
						<Text style={styles.expenseItemText}>{quantity}</Text>
						<Text style={styles.expenseItemText}>$ {amount.toFixed(2)}</Text>
					</View>
				</Animated.View>
			</GestureDetector>
		</View>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	expenseItemOuter: {
		backgroundColor: colors.primaryShades.primary500,
		marginBottom: 8,
		height: 60
	},
	expenseItemInner: {
		backgroundColor: colors.primaryShades.primary800,
		margin: 8,
		paddingVertical: 4,
		paddingHorizontal: 8,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	expenseItemLeft: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginRight: 8
	},
	expenseIemRight: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	expenseItemText: {
		color: colors.grayShades.gray50
	}
});
