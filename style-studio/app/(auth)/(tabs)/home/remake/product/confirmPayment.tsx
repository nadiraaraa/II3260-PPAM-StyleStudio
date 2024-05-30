import { createBook } from '@/api/book.api';
import { upgradeToTailor } from '@/api/user.api';
import { useSession } from '@/context/SessionContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConfirmPayment = () => {
	const router = useRouter();
	const { profile } = useSession();
	const { total, alterCount, createCount, alterTotal, createTotal, tailorId } =
		useLocalSearchParams();

	const handlePayment = async () => {
		await createBook(
			parseInt(alterCount as string),
			parseInt(createCount as string),
			parseInt(total as string),
			'BCA',
			tailorId as string,
			profile?.uid!
		);
		router.push('/home/remake/product/paymentSuccess');
	};

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
							source={require('../../../../../../assets/images/bca.png')}
							style={styles.logoImage}
							resizeMethod="scale"
						/>
						<Text>BCA</Text>
					</View>
					<Text>**** **** **** 1803</Text>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.subtitleText}>Alter Price</Text>
					<Text style={styles.subtitleText}>Rp {alterTotal}</Text>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.subtitleText}>Create Price</Text>
					<Text style={styles.subtitleText}>Rp {createTotal}</Text>
				</View>
				<View style={styles.totalContainer}>
					<Text style={styles.titleText}>Total</Text>
					<Text style={styles.titleText}>Rp {total}</Text>
				</View>
			</View>
			<View style={styles.footer}>
				<View style={styles.footerTextContainer}>
					<Text style={styles.footerTotalText}>Total: Rp {total}</Text>
				</View>
				<Pressable style={styles.payButton} onPress={handlePayment}>
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

	formContainer: {
		// flexGrow: 1,
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	formLabel: {
		fontSize: 13,
		// fontWeight: '500',
		marginTop: 5,
	},

	input: {
		height: 50,
		borderColor: '#CCCCCC',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 5,
		backgroundColor: '#FFFFFF',
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
		marginBottom: 10,
	},

	titleText: {
		fontSize: 16,
		fontWeight: '500',
	},

	subtitleText: {
		fontSize: 16,
		// fontWeight: '500',
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
