import { useRouter } from 'expo-router';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const PaymentSuccess = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={require('../../../../../assets/images/success.png')}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.successText}>Success!</Text>
				<Text style={styles.descriptionText}>
					Payment successful!{'\n'}Feel free to offer tailoring services
				</Text>
			</View>
			<Pressable
				style={styles.button}
				onPress={() => {
					router.push('/home/remake');
				}}
			>
				<Text style={{ color: 'white' }}>CONTINUE TO REMAKE PAGE</Text>
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		gap: 20,
	},
	image: {
		width: '80%',
		height: '30%', // Adjust the height to ensure there's space for text
		marginBottom: 20, // Add some space between the image and the text
	},
	textContainer: {
		alignItems: 'center', // Center the text
	},
	successText: {
		fontSize: 34,
		fontWeight: '700',
		textAlign: 'center', // Center text horizontally
		marginBottom: 10, // Add some space between the two text elements
	},
	descriptionText: {
		width: '50%',
		fontSize: 14,
		fontWeight: '400',
		textAlign: 'center', // Center text horizontally
	},
	button: {
		backgroundColor: '#616219',
		padding: 15,
		paddingHorizontal: 40,
		borderRadius: 25,
	},
});

export default PaymentSuccess;
