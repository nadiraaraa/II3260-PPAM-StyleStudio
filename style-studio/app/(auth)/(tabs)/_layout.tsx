import { Tabs, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const Layout = () => {
	const router = useRouter();

	return (
		<Tabs
			sceneContainerStyle={{ backgroundColor: 'E6E3D1' }}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: '#E6E3D1', // Green background color
					height: 60,
					padding: 5,
				},
				tabBarActiveTintColor: '#FFFFF', // White color for the active tab icon/text
				tabBarInactiveTintColor: '#49454F', // Black color for the inactive tab icon/text
			}}
		>
			<Tabs.Screen
				name="activity/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Activity',
					tabBarIcon: ({ color }) => (
						<FontAwesome size={24} name="list-ul" color={color} />
					),
					// headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Home',
					tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'My Profile',
					tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
					// head
				}}
			/>
			<Tabs.Screen
				name="home/thrift/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Thrift',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/thrift/product"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Thrift Product',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/thrift/payment"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Order Payment',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/thrift/paymentSuccess"
				options={{
					headerShown: false,
					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/thrift/seller"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Seller Profile',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/thrift/filter"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					tabBarStyle: { display: 'none' },

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/sell/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Sell',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/sell/add"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Add Item',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/upgrade"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/payment"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/confirmPayment"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/paymentSuccess"
				options={{
					headerShown: false,
					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/product/confirmPayment"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/product/paymentSuccess"
				options={{
					headerShown: false,
					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/product/book"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Book Tailor',
					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>

			<Tabs.Screen
				name="activity/detail"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Detail',

					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="activity/addReview"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Add Review',

					tabBarStyle: { display: 'none' }, // Hide bottom navigation bar
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/product/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home/remake/seller/index"
				options={{
					headerTintColor: '#FFFFFF',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#616219',
					},
					title: 'Remake',

					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
							<FontAwesome name="arrow-left" size={12} color="#FFFFFF" />
						</TouchableOpacity>
					),
					href: null,
				}}
			/>
		</Tabs>
	);
};

export default Layout;
