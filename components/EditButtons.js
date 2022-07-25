import { View, StyleSheet } from 'react-native';
import Button from './ui/Button';

const EditButtons = ({ onNavigation, expenseId }) => {
	return (
		<View style={styles.editButtonsContainer}>
			<View style={{ marginRight: 8 }}>
				<Button
					buttonColor='secondary'
					buttonSize='medium'
					onPress={() =>
						onNavigation.navigate('ManageExpense', {
							expenseId
						})
					}
				>
					UPDATE
				</Button>
			</View>

			<Button
				buttonColor='warning'
				buttonSize='medium'
				onPress={() =>
					onNavigation.navigate('DeletionExpense', {
						expenseId
					})
				}
			>
				DELETE
			</Button>
		</View>
	);
};

export default EditButtons;

const styles = StyleSheet.create({
	editButtonsContainer: {
		position: 'absolute',
		flexDirection: 'row',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: 8
	}
});
