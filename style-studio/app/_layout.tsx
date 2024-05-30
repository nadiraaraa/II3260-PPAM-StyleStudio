// app/_layout.tsx
import { SessionProvider } from '@/context/SessionContext';
import { Stack } from 'expo-router';
import React from 'react';

function RootLayoutNav() {
	return (
		<SessionProvider>
			<Stack>
				<Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(public)/login/index" options={{ headerShown: false }} />
				<Stack.Screen name="(public)/signup/index" options={{ headerShown: false }} />
			</Stack>
		</SessionProvider>

	);
}

export default RootLayoutNav;
