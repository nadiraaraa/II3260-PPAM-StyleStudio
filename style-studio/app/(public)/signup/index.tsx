import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSession } from '@/context/SessionContext';

const SignUp = () => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [city, setCity] = useState('');
	const [telephone, setTelephone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const { signUp } = useSession();

	const handleSignUp = async () => {
		if (password !== confirmPassword) {
			Alert.alert('Passwords do not match');
			return;
		}

		if (!name || !email || !password) {
			Alert.alert('Please fill out all fields');
			return;
		}

		const { data, error } = await signUp(email, password, name, city, telephone);
		if (error) {
			Alert.alert('Error', error.message || 'An error occurred');
			return;
		}
		router.push('/(tabs)');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Pressable onPress={() => router.back()} style={styles.backButton}>
					<Text style={styles.backButtonText}>←</Text>
				</Pressable>
				<Text style={styles.title}>Sign Up</Text>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Name"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						value={name}
						onChangeText={setName}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Province"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						value={city}
						onChangeText={setCity}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Telephone"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						keyboardType='number-pad'
						value={telephone}
						onChangeText={setTelephone}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						value={password}
						onChangeText={setPassword}
						secureTextEntry
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Confirm Password"
						placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						secureTextEntry
					/>
				</View>
				<Pressable style={styles.createAccountButton} onPress={() =>handleSignUp()}>
					<Text style={styles.createAccountButtonText}>Create Account</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
		padding: 20,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
		justifyContent: 'space-between',
	},
	backButton: {
		padding: 10,
	},
	backButtonText: {
		fontSize: 18,
		color: '#808080',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		flex: 1,
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	inputContainer: {
		borderColor: '#CCCCCC',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
		backgroundColor: '#FFFFFF',
	},
	input: {
		height: 50,
		fontSize: 16,
		fontWeight: 'bold',
	},
	createAccountButton: {
		backgroundColor: '#616219', // Medium green background color
		paddingVertical: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginVertical: 20,
	},
	createAccountButtonText: {
		color: '#FFFFFF', // White text color
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default SignUp;
