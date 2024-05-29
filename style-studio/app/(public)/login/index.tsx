import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSession } from '@/context/SessionContext';

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signIn } = useSession();

	const handleLogin = async () => {
		if (email && password) {
			const response = await signIn(email, password);
			console.log(response);
			if (response.error) {
				Alert.alert('Error', response.error.message || 'An error occurred');
				return;
			} else {
				router.push('/(tabs)');
			}
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Pressable onPress={() => router.back()} style={styles.backButton}>
					<Text style={styles.backButtonText}>←</Text>
				</Pressable>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Sign In</Text>
				</View>
			</View>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					autoCapitalize="none"
					placeholderTextColor="#8C8C8C"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					placeholderTextColor="#8C8C8C"
				/>
				<Text style={styles.forgotPassword}>Forgot your password?</Text>
				<Pressable style={styles.signInButton} onPress={handleLogin}>
					<Text style={styles.signInButtonText}>Sign In</Text>
				</Pressable>
				<View style={styles.signUpContainer}>
					<Text style={styles.needAccountText}>Need An Account? </Text>
					<Pressable onPress={() => router.push('/signup')}>
						<Text style={styles.signUpText}>Sign Up</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	backButton: {
		padding: 10,
	},
	backButtonText: {
		fontSize: 18,
		color: '#808080',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	input: {
		height: 50,
		borderColor: '#CCCCCC',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
		backgroundColor: '#FFFFFF',
	},
	forgotPassword: {
		textAlign: 'right',
		color: '#808080',
		marginVertical: 10,
	},
	signInButton: {
		backgroundColor: '#6D6D4E',
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginVertical: 20,
	},
	signInButtonText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	signUpContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	needAccountText: {
		color: '#808080',
	},
	signUpText: {
		color: '#6D6D4E',
		fontWeight: 'bold',
	},
});

export default Login;
