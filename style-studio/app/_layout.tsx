import { Stack } from 'expo-router';
import React from 'react';

function RootLayoutNav() {
	console.log('KOJTJATOJA');

	return (
		<Stack>
			<Stack.Screen name="(auth)/(tabs)/index" options={{ headerShown: false }} />
			<Stack.Screen name="(public)/index" options={{ headerShown: false }} />
		</Stack>
	);
}
