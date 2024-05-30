import { useSession } from '@/context/SessionContext';
import { useRouter } from 'expo-router';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Payment = () => {
	const router = useRouter();
	const { profile } = useSession();

	if (profile?.isTailor) {
		return (
			<SafeAreaView
				style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
			>
				<Text style={{ fontSize: 36, textAlign: 'center', fontWeight: 'bold' }}>
					You are already a tailor
				</Text>
				<Pressable
					style={styles.endButton}
					onPress={() => {
						router.push('/home/remake/');
					}}
				>
					<Text style={{ color: 'white' }}>GO BACK TO REMAKE</Text>
				</Pressable>
			</SafeAreaView>
		);
	}

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View>
					<Text style={[styles.text, { textAlign: 'left' }]}>Register as tailor</Text>
				</View>
				<View style={styles.cardContainer}>
					<Pressable
						style={styles.card}
						onPress={() => {
							router.push({
								pathname: '/home/remake/confirmPayment',
								params: {
									amount: 100000,
									month: 1,
								},
							});
						}}
					>
						<View>
							<Text style={styles.cardTitle}>1 Month</Text>
							<Text style={styles.cardSubTitle}>Total Rp 100.000</Text>
						</View>
						<View>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Rp 100.000
							</Text>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Monthly
							</Text>
						</View>
					</Pressable>
					<Pressable
						style={styles.card}
						onPress={() => {
							router.push({
								pathname: '/home/remake/confirmPayment',
								params: {
									amount: 540000,
									month: 6,
								},
							});
						}}
					>
						<View>
							<Text style={styles.cardTitle}>6 Month</Text>
							<Text style={styles.cardSubTitle}>Total Rp 540.000</Text>
						</View>
						<View>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Rp 90.000
							</Text>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Monthly
							</Text>
						</View>
					</Pressable>
					<Pressable
						style={styles.card}
						onPress={() => {
							router.push({
								pathname: '/home/remake/confirmPayment',
								params: {
									amount: 960000,
									month: 12,
								},
							});
						}}
					>
						<View>
							<Text style={styles.cardTitle}>12 Month</Text>
							<Text style={styles.cardSubTitle}>Total Rp 960.000</Text>
						</View>
						<View>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Rp 80.000
							</Text>
							<Text style={[styles.cardSubTitle, { textAlign: 'center' }]}>
								Monthly
							</Text>
						</View>
					</Pressable>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
		padding: 20,
		width: '100%',
		gap: 20,
	},

	cardContainer: {
		flex: 1,
		gap: 30,
	},

	card: {
		backgroundColor: '#E6E4BF',
		padding: 16,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	cardTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 24,
	},

	cardSubTitle: {
		fontSize: 15,
		fontWeight: '600',
	},

	text: {
		fontSize: 30,
		fontWeight: '400',
		textAlign: 'center',
		color: '#616219',
	},

	button: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
	},

	buttonText: {
		fontSize: 16,
		color: 'white',
	},
	endButton: {
		backgroundColor: '#616219',
		padding: 15,
		paddingHorizontal: 40,
		borderRadius: 25,
	},
});

export default Payment;
