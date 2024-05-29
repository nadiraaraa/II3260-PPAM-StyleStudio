import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					backgroundColor: '#E6E3D1', // Green background color
					height: 60,
				},
				tabBarActiveTintColor: '#FFFFF', // White color for the active tab icon/text
				tabBarInactiveTintColor: '#49454F', // Black color for the inactive tab icon/text
			}}
		>
			<Tabs.Screen
				name="activity/index"
				options={{
					title: 'Activity',
					tabBarIcon: ({ color }) => (
						<FontAwesome size={24} name="list-ul" color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="home/remake/index"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="activity/[actId]/index"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
};

export default Layout;
