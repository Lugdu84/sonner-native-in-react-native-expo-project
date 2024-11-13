import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function CustomToast() {
	return (
		<View style={styles.container}>
			<Text>Custom Toast</Text>
			<View style={styles.row}>
				<Pressable style={styles.okButton}>
					<Text style={styles.text}>Validez</Text>
				</Pressable>
				<Pressable style={styles.cancelButton}>
					<Text style={styles.text}>Annuler</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		backgroundColor: 'lightblue',
		padding: 10,
		borderRadius: 10,
	},
	row: {
		flexDirection: 'row',
	},
	okButton: {
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
		margin: 5,
	},
	text: {
		color: 'white',
	},
	cancelButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		margin: 5,
	},
});
