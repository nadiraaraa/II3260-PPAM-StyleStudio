import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
	const router = useRouter();

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View>
					<Text style={styles.text}>Do you want to be a tailor?</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', gap: 10 }}>
					<Link
						href={{ pathname: '/home/remake/blomada' }}
						style={[styles.button, { backgroundColor: '#616219' }]}
					>
						<Text style={styles.buttonText}>I'm already a tailor</Text>
					</Link>
					<Link
						href={{ pathname: '/home/remake/upgrade' }}
						style={[styles.button, { backgroundColor: '#CACB77' }]}
					>
						<Text style={styles.buttonText}>Probably</Text>
					</Link>
					<Link
						href={{ pathname: '/home/remake/blomada' }}
						style={[styles.button, { backgroundColor: '#616219' }]}
					>
						<Text style={styles.buttonText}>No, I'm only looking</Text>
					</Link>
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
		justifyContent: 'center',
		alignContent: 'center',
		gap: 20,
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
});

export default Home;
