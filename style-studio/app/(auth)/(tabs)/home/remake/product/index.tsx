import { fetchTailors, Tailor } from '@/api/tailor.api';
import { supabaseClient } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
	Dimensions,
	FlatList,
} from 'react-native';

const images = [
	require('../../../../../../assets/images/contoh1.png'),
	require('../../../../../../assets/images/jumpsuit.jpg'),
	require('../../../../../../assets/images/kaftan.jpg'),
	require('../../../../../../assets/images/knit.jpg'),
	require('../../../../../../assets/images/dress.jpg'),
	require('../../../../../../assets/images/cardigan.jpg'),
	require('../../../../../../assets/images/hoodie.jpg'),

	// tambahkan path gambar lain yang diinginkan
];

const getRandomImage = () => {
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
};

const RemakeProductPage = () => {
	const router = useRouter();

	const [viewCategory, setViewCategory] = React.useState(false);
	const [search, setSearch] = React.useState('');
	const [tailors, setTailors] = React.useState<Tailor[]>([]);
	const screenWidth = Dimensions.get('window').width;

	React.useEffect(() => {
		(async () => {
			try {
				const data = await fetchTailors();
				setTailors(data);
			} catch (error) {
				console.log(error);
				setTailors([]);
			}
		})();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.bar}>
				<View style={styles.input}>
					<TextInput
						placeholder="Search..."
						value={search}
						onChangeText={setSearch}
						keyboardType="email-address"
						autoCapitalize="none"
						placeholderTextColor="#8C8C8C"
					/>
					<Pressable onPress={() => {}}>
						<Image
							source={require('../../../../../../assets/images/search.png')}
							style={styles.icon}
						/>
					</Pressable>
				</View>
				<Pressable
					onPress={() => {
						setViewCategory(true);
						console.log(viewCategory);
					}}
				>
					<Image
						source={require('../../../../../../assets/images/category.png')}
						style={styles.icon}
					/>
				</Pressable>
			</View>
			<ScrollView style={{ marginHorizontal: 'auto', alignContent: 'center' }}>
				<Image
					style={[styles.heroImage, { width: screenWidth, height: screenWidth * 0.55 }]} // Adjusted height to maintain aspect ratio
					source={require('../../../../../../assets/images/remake-hero.png')}
					resizeMethod="resize"
					resizeMode="cover"
				/>
				<View style={styles.tailorList}>
					{tailors.map((tailor) => (
						<Pressable
							key={tailor.tailorId}
							style={styles.card}
							onPress={() => {
								router.push('/home/remake/book');
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={{ uri: tailor.user?.photo }}
									style={{ width: 135, height: 135 }}
								/>
								<View style={{ flex: 1 }}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'flex-start',
											padding: 8,
										}}
									>
										<View>
											<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
												{tailor.user?.name}
											</Text>
											<Text>{tailor.address}</Text>
										</View>
									</View>
									<View
										style={{
											marginTop: 'auto',
											alignItems: 'flex-end',
											marginRight: 8,
											marginBottom: 10,
										}}
									>
										{/* Pushes the price text to the bottom right */}
										<Text>Alter Price</Text>
										<Text style={{ fontSize: 10 }}>{tailor.alterPrice}</Text>
										<Text>Create Price</Text>
										<Text style={{ fontSize: 10 }}>{tailor.createPrice}</Text>
									</View>
								</View>
							</View>
						</Pressable>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDF9EC',
	},

	tailorList: {
		width: '100%',
		marginTop: 10,
		alignItems: 'center',
	},

	heroImage: {
		width: '100%',
	},
	card: {
		backgroundColor: '#FFFFFF',
		width: '90%',
		justifyContent: 'space-between',
		borderRadius: 10,
		elevation: 3,
		marginBottom: 10,
	},
	item: {
		padding: 0,
		fontSize: 18,
		height: 44,
	},

	text: {
		fontSize: 20,
		fontWeight: '400',
		textAlign: 'center',
		color: '#616219',
		padding: 10,
	},

	bar: {
		backgroundColor: '#DEDD91',
		width: '100%',
		padding: 10,
		alignItems: 'center',
		flexDirection: 'row',
	},

	input: {
		height: 50,
		borderWidth: 1,
		borderRadius: 20,
		paddingHorizontal: 10,
		borderColor: '#616219',
		backgroundColor: '#E6E3D1',
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	icon: {
		width: 50, // Adjusted icon size
		height: 50, // Adjusted icon size
	},
});

export default RemakeProductPage;
