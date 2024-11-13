import { Button, StyleSheet } from 'react-native';

import { View, Text } from '@/components/Themed';
import { toast, Toaster } from 'sonner-native';
import { Ionicons } from '@expo/vector-icons';
import CustomToast from '@/components/CustomToast';

type Id = string | number | undefined;

export default function TabOneScreen() {
	let id: Id;

	const fetchData = async () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject('Erreur de chargement');
				// resolve('Données chargées');
			}, 2000);
		});
	};

	const showSimpleToast = () => {
		id = toast('Hello world', {
			description: 'This is a simple toast',
			// icon: (
			// 	<Ionicons
			// 		name="accessibility"
			// 		size={24}
			// 		color="green"
			// 	/>
			// ),
			style: {
				backgroundColor: 'blue',
				borderRadius: 20,
			},
			duration: 5000,
		});
	};

	const showToastWithVariations = () => {
		// toast.success('Success toast');
		// toast.warning('Warning toast');
		toast.error('Error toast');
	};

	const showToastwithAction = () => {
		// toast.warning('Error toast', {
		// 	action: {
		// 		label: 'Retry',
		// 		onClick: () => console.log('Retry clicked'),
		// 	},
		// });
		toast.error('Error toast', {
			action: (
				<Button
					title="Retry"
					onPress={() => console.log('Retry clicked')}
				/>
			),
		});
	};

	const showToastWithCancel = () => {
		toast.warning('warning toast', {
			cancel: {
				label: 'Cancel',
				onClick: () => {
					toast.success('Toast dismissed');
				},
			},
		});
	};

	const showToastWithStyles = () => {
		toast.warning('warning toast avec styles', {
			description: 'This is a warning toast',
			cancel: {
				label: 'Cancel',
				onClick: () => {
					toast.success('Toast dismissed');
				},
			},
			action: {
				label: 'Retry',
				onClick: () => console.log('Retry clicked'),
			},
			styles: {
				toast: { backgroundColor: 'red' },
				toastContent: { backgroundColor: 'white' },
				toastContainer: { backgroundColor: 'blue' },
				description: { color: 'green' },
				buttons: { gap: 80, backgroundColor: 'yellow' },
				title: { color: 'purple' },
			},
		});
	};

	const showToastWithPromises = () => {
		toast.promise(fetchData(), {
			loading: 'Loading data',
			success: (data) => `success : ${data}`,
			error: (error) => `error : ${error}`,
		});
	};

	const showToastWithUpdate = () => {
		toast.warning('updating toast', { id });
	};

	const showToastWithCustomJSX = () => {
		toast.custom(<CustomToast />);
	};

	const showToastWithCallback = () => {
		toast.success('success toast', {
			onDismiss: () => console.log('Toast dismissed'),
			onAutoClose: () => console.log('Toast auto closed'),
		});
	};

	const handleDismiss = () => {
		toast.dismiss();
	};

	const wiggleToast = () => {
		if (!id) return;
		toast.wiggle(id);
	};
	return (
		<View style={styles.container}>
			<Button
				title="Toast simple"
				onPress={showSimpleToast}
			/>
			<Button
				title="Toast avec variations"
				onPress={showToastWithVariations}
			/>
			<Button
				title="Toast avec Action"
				onPress={showToastwithAction}
			/>
			<Button
				title="Toast avec Cancel"
				onPress={showToastWithCancel}
			/>
			<Button
				title="Toast avec Styles"
				onPress={showToastWithStyles}
			/>
			<Button
				title="Toast avec Promises"
				onPress={showToastWithPromises}
			/>
			<Button
				title="Toast avec Custom JSX"
				onPress={showToastWithCustomJSX}
			/>
			<Button
				title="Toast avec Update"
				onPress={showToastWithUpdate}
			/>
			<Button
				title="Toast avec Callback"
				onPress={showToastWithCallback}
			/>
			<Button
				title="Dismiss"
				onPress={handleDismiss}
			/>
			<Button
				title="Wiggle Id"
				onPress={wiggleToast}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	toast: {
		width: '90%',
		margin: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
	},
	okButton: {
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
	},
	cancelButton: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
	},
	text: {
		color: 'white',
	},
	customStyle: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 20,
	},
});
