import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
	const [page, setPage] = useState('Thrift');
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.welcomeText}>Hello, Welcome Back</Text>
			</View>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.contentContainer}>
					<Pressable
						style={[styles.card]}
						onPress={() => router.push('/(auth)/(tabs)/home/thrift')}
					>
						<Image
							source={require('../../../assets/images/thrift.png')}
							style={styles.cardImage}
						/>
						<Text style={styles.cardTitle}>Thrift</Text>
						<Text style={styles.cardDescription}>
							Shop affordable, second-hand fashion for stylish savings.
						</Text>
					</Pressable>
					<Pressable
						style={[styles.card]}
						onPress={() => router.push('/(auth)/(tabs)/home/remake')}
					>
						<Image
							source={require('../../../assets/images/remake.png')}
							style={styles.cardImage}
						/>
						<Text style={styles.cardTitle}>Remake</Text>
						<Text style={styles.cardDescription}>
							Transform old clothes into trendy, new designs with skilled tailors.
						</Text>
					</Pressable>
				</View>
				<View style={styles.singleCardContainer}>
					<Pressable
						style={[styles.card]}
						onPress={() => router.push('/(auth)/(tabs)/home/sell')}
					>
						<Image
							source={require('../../../assets/images/sell.png')}
							style={styles.cardImage}
						/>
						<Text style={styles.cardTitle}>Sell</Text>
						<Text style={styles.cardDescription}>
							Sell your old clothes to save more space in your wardrobe.
						</Text>
					</Pressable>
				</View>
				{/* <View style={styles.pageContent}>
					{page === 'Thrift' && (
						<View>
							<Text style={styles.pageTitle}>Thrift Page</Text>
							<Text>Shop affordable, second-hand fashion for stylish savings.</Text>
						</View>
					)}
					{page === 'Remake' && (
						<View>
							<Text style={styles.pageTitle}>Remake Page</Text>
							<Text>
								Transform old clothes into trendy, new designs with skilled tailors.
							</Text>
						</View>
					)}
					{page === 'Sell' && (
						<View>
							<Text style={styles.pageTitle}>Sell Page</Text>
							<Text>Sell your old clothes to save more space in your wardrobe.</Text>
						</View>
					)}
				</View> */}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
	},
	scrollViewContent: {
		padding: 20,
	},
	header: {
		backgroundColor: '#616219', // Dark green background color
		paddingVertical: 15,
		alignItems: 'center',
		marginBottom: 20,
	},
	welcomeText: {
		fontSize: 24,
		color: '#FFFFFF', // White text color
	},
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 20,
	},
	singleCardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		width: '45%', // Adjusted width
		height: 250, // Adjusted height
		backgroundColor: '#D0D0A5', // Light green background color
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 20,
	},
	activeCard: {
		backgroundColor: '#6D6D4E', // Medium green background color
	},
	cardImage: {
		width: '100%',
		height: 120, // Adjusted height
		resizeMode: 'cover',
		borderRadius: 10,
		marginBottom: 10,
	},
	cardTitle: {
		fontSize: 18, // Adjusted font size
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#4B5320', // Dark green text color
	},
	cardDescription: {
		fontSize: 14, // Adjusted font size
		textAlign: 'center',
		color: '#4B5320', // Dark green text color
	},
	pageContent: {
		marginTop: 20,
		padding: 20,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
	},
	pageTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#4B5320', // Dark green text color
	},
});

export default Home;
