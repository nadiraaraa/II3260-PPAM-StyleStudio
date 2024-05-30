import { Book, fetchTailorBooks } from '@/api/book.api';
import { fetchTailorById, Tailor } from '@/api/tailor.api';
import { useSession } from '@/context/SessionContext';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

const RemakeSellerPage = () => {
	const { profile } = useSession();
	const [tailor, setTailor] = useState<Tailor | null>(null);
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		(async () => {
			const data = await fetchTailorById(profile?.uid as string);
			if (!data) return console.log('Tailor not found');
			setTailor(data);

			const books = await fetchTailorBooks(data.tailorId);
			setBooks(books);

			console.log(books);
		})();
	}, []);

	if (!profile?.isTailor) {
		return (
			<SafeAreaView
				style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
			>
				<Text style={{ fontSize: 36, textAlign: 'center', fontWeight: 'bold' }}>
					You are NOT a tailor
				</Text>
				<Pressable
					style={styles.endButton}
					onPress={() => {
						// router.push('/home/remake/');
					}}
				>
					<Text style={{ color: 'white' }}>GO BACK TO REMAKE</Text>
				</Pressable>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text>Your Orders</Text>
			<FlatList
				data={books}
				renderItem={({ item }) => {
					return (
						<Pressable style={styles.card}>
							<Text style={styles.cardSubTitle}>Order ID: {item.id}</Text>
							<Text style={styles.cardSubTitle}>Total: {item.total}</Text>
							<Text style={styles.cardSubTitle}>
								Payment Method: {item.paymentMethod}
							</Text>
							<Text style={styles.cardSubTitle}>
								Reviewed: {item.reviewed ? 'Yes' : 'No'}
							</Text>
						</Pressable>
					);
				}}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.cardContainer}
			/>
		</SafeAreaView>
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
		// backgroundColor: '#E6E4BF',
		borderWidth: 2,
		borderColor: 'lightgray',
		padding: 16,
		borderRadius: 20,
		// flexDirection: 'row',
		justifyContent: 'space-between',
		// alignItems: 'center',
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

export default RemakeSellerPage;
