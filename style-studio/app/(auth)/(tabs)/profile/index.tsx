import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSession } from '@/context/SessionContext';

const Profile = () => {
	const router = useRouter();

	const { user, isLoading, signOut } = useSession();

	console.log(user?.user_metadata);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

	const handleLogout = async () => {
		await signOut();
		router.replace('/');
	};
	

	return (
		<SafeAreaView style={styles.container}>
			{/* <View style={styles.header}>
				<Pressable style={styles.backButton} onPress={() => router.push('/activity')}>
					<Text style={styles.headerButtonText}>Back</Text>
				</Pressable>
				<Text style={styles.headerText}>My Profile</Text>
				<Pressable style={styles.settingsButton}>
					<Text style={styles.headerButtonText}>Settings</Text>
				</Pressable>
			</View> */}
			<View style={styles.profilePicContainer}>
				<Image
					source={require('../../../../assets/images/profile.png')}
					style={styles.profilePic}
				/>
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Nama</Text>
					<Text style={styles.infoValue}>{user?.user_metadata?.full_name}</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>No. Handphone</Text>
					<Text style={styles.infoValue}>{user?.user_metadata?.telephone}</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Email</Text>
					<Text style={styles.infoValue}>{user?.user_metadata?.email}</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Lokasi</Text>
					<Text style={styles.infoValue}>{user?.user_metadata?.city}</Text>
				</View>
				{/* <Pressable style={styles.infoRow}>
					<Text style={styles.infoLabel}>Review Saya</Text>
					<Text style={styles.infoValue}>Detail Review &gt;</Text>
				</Pressable> */}
				<Pressable style={{justifyContent: 'flex-end',}} onPress={handleLogout}>
                <Text style={{ padding: 10, textAlign: 'center',margin: 80, width: 120, fontSize: 16, borderWidth: 1, borderColor: '#616219', color: '#616219', fontWeight: 'bold', borderRadius: 10, alignSelf: 'center' }}>
                    Log Out
                </Text>
            </Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // White background color
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#6D6D4E', // Medium green background color
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	backButton: {
		marginRight: 10,
	},
	headerButtonText: {
		color: '#FFFFFF', // White text color
		fontSize: 16,
	},
	headerText: {
		flex: 1,
		color: '#FFFFFF', // White text color
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	settingsButton: {
		marginLeft: 10,
	},
	profilePicContainer: {
		alignItems: 'center',
		marginVertical: 20,
	},
	profilePic: {
		width: 80, // Adjusted width
		height: 80, // Adjusted height
		borderRadius: 40,
	},
	infoContainer: {
		marginHorizontal: 20,
	},
	infoRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginVertical: 5,
		backgroundColor: '#f4f4f4', // Light grey background color for cards
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 5,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	infoLabel: {
		fontSize: 16,
		color: '#4B5320', // Dark green color for label text
	},
	infoValue: {
		fontSize: 16,
		color: '#4B5320', // Dark green color for value text
	},
});

export default Profile;
