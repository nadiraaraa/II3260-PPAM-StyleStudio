import { useSession } from '@/context/SessionContext';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchBookedHistory } from '../../../../../routes/bookedHistory';
import { fetchSubHistory } from '../../../../../routes/subHistory';
import { bookType, subType } from '../../../../../components/activity';


const Tailor = () => {
	const router = useRouter();
	const { profile } = useSession();
	const userId = profile?.uid;
	const isT = profile?.isTailor;

	const [books, setBooks] = useState<bookType[]>([]);
	const [subs, setSubs] = useState<subType[]>([]);
	const [page, setPage] = useState("Incoming Orders");

	if (isT) {
		useEffect(() => {
			const loadActivity = async () => {
					const bookData = await fetchBookedHistory(userId);
					// console.log(bookData);
					setBooks(bookData);

					const subData = await fetchSubHistory(userId);
					// console.log(bookData);
					setSubs(subData);
					console.log(subs);
			};

			loadActivity();
		}, []);

		return (
			<View style={styles.container}>

				<View style={styles.tabs}>
					<Pressable onPress={() => setPage("Incoming Orders")}>
						<Text style={[styles.tab, page === "Incoming Orders" && styles.activeTab]}>Incoming Orders</Text>
					</Pressable>
					<Pressable onPress={() => setPage("Subscription Orders")}>
						<Text style={[styles.tab, page === "Subscription Orders" && styles.activeTab]}>Subscription Orders</Text>
					</Pressable>

				</View>

				<ScrollView>
					{page == "Incoming Orders" ?
						<View>
							{books.map((book, idx) => (
								<View key={idx} style={styles.card}>
									<View style={styles.cardText}>
										<Text style={styles.name}>{book.cust_name}</Text>
										<Text style={styles.category}>Alter: {book.alterCount?.toString()}</Text>
										<Text style={styles.category}>Create: {book.createCount?.toString()}</Text>
										<Text style={styles.price}>Total Rp {book.total?.toString()}</Text>
									</View>
									<View style={{ justifyContent: 'flex-end' }}>
										<Text style={styles.date}>{book.created_at}</Text>
										{/* <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?page=${page}&detail=${JSON.stringify(book)}`)}>
										<Text style={styles.detailsButtonText}>Details</Text>
									</Pressable> */}
									</View>
								</View>
							))}
						</View>
						:
						<View>
							{subs.map((sub, idx) => (
								<View key={idx} style={styles.card}>
									<View style={styles.cardText}>
										<Text style={styles.name}>{sub.name}</Text>
										<Text style={styles.category}>Duration: {sub.days} days</Text>
										<Text style={styles.category}>Price: {sub.price?.toString()}</Text>
									</View>
									<View style={{ justifyContent: 'flex-end' }}>
										<Text style={styles.date}>{sub.created_at}</Text>
										{/* <Pressable style={styles.detailsButton} onPress={() => router.push(`activity/detail?page=${page}&detail=${JSON.stringify(book)}`)}>
										<Text style={styles.detailsButtonText}>Details</Text>
									</Pressable> */}
									</View>
								</View>
							))}
						</View>
					}

				</ScrollView>
			</View >
		);
	};

	return (
		<>
			<SafeAreaView style={[styles.container, {padding: 30}]}>
				<View>
					<Text style={styles.text}>Do you want to be a tailor?</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', gap: 10 }}>
					<Link
						href={{ pathname: '/home/remake/payment' }}
						style={[styles.button, { backgroundColor: '#CACB77' }]}
					>
						<Text style={styles.buttonText}>Yes, I want to be a tailor</Text>
					</Link>
					<Link
						href={{ pathname: '/home/remake/product' }}
						style={[styles.button, { backgroundColor: '#616219' }]}
					>
						<Text style={styles.buttonText}>No, I'm looking for tailors</Text>
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
		// padding: 20,
		width: '100%',
		// justifyContent: 'center',
		// alignContent: 'center',
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
		textAlign: 'center',
		fontSize: 16,
		color: 'white',
		fontWeight: 'bold'
	},
	tabs: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#D0D0A5", // Light green background color
		paddingVertical: 10,
	},
	tab: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		backgroundColor: "#D0D0A5", // Light green background color
		color: "#6D6D4E", // Medium green text color
		fontWeight: "bold",
	},
	activeTab: {
		backgroundColor: "#616219", // Medium green background color
		color: "#FFFFFF", // White text color
	},
	card: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		margin: 10,
		borderRadius: 10,
		backgroundColor: "#FFFFFF", // White background color
		borderWidth: 1,
		borderColor: "#ddd",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 5,
	},
	cardText: {
		flex: 1,
		width: 460
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#616219", // Dark green text color
		paddingBottom: 5
	},
	category: {
		fontSize: 16,
		color: "#616219", // Dark green text color
	},
	price: {
		fontSize: 16,
		color: "#616219", // Dark green text color
		fontWeight: "bold",
	},
	date: {
		fontSize: 14,
		color: "#616219", // Dark green text color
		flexWrap: 'wrap',
		flex: 1,
		width: 80,
	},
	detailsButton: {
		backgroundColor: "#616219", // Medium green background color
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 5,
		marginVertical: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	detailsButtonText: {
		color: "#FFFFFF", // White text color
		fontWeight: "bold",
	},
});

export default Tailor;
