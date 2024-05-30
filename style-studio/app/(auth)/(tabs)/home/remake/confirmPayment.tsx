import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConfirmPayment = () => {
	const router = useRouter();
	const { amount } = useLocalSearchParams();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.titleText}>Payment</Text>
					<Text style={[styles.titleText, { color: 'red' }]}>Change</Text>
				</View>
				<View style={styles.paymentContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../../../../assets/images/bca.png')}
							style={styles.logoImage}
							resizeMethod="scale"
						/>
						<Text>BCA</Text>
					</View>
					<Text>**** **** **** 1803</Text>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.titleText}>Total</Text>
					<Text style={styles.titleText}>Rp {amount}</Text>
				</View>
			</View>
			<View style={styles.footer}>
				<View style={styles.footerTextContainer}>
					<Text style={styles.footerTotalText}>Total: Rp {amount}</Text>
				</View>
				<Pressable
					style={styles.payButton}
					onPress={() => {
						router.push('/home/remake/paymentSuccess');
					}}
				>
					<Text style={styles.payButtonText}>PAY</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
		width: '100%',
	},

	contentContainer: {
		flexGrow: 1,
		paddingHorizontal: 20,
	},

	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// marginBottom: 20, // Add some space below the header
	},

	paymentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	imageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginVertical: 20, // Add some vertical margin to position the image
	},

	totalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	titleText: {
		fontSize: 16,
		fontWeight: '500',
	},

	logoImage: {
		width: 30,
		height: 30,
	},

	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#D2D2A4', // Light greenish color
		paddingVertical: 15,
		paddingHorizontal: 20,
	},

	footerTextContainer: {
		flex: 1,
	},

	footerTotalText: {
		fontSize: 16,
		fontWeight: '500',
	},

	payButton: {
		backgroundColor: '#65632F', // Dark greenish color
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},

	payButtonText: {
		color: '#FFFFFF', // White text color
		fontSize: 16,
		fontWeight: '600',
	},
});

export default ConfirmPayment;
