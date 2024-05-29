import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient, User } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
	getItem: (key: string) => {
		return SecureStore.getItemAsync(key);
	},
	setItem: (key: string, value: string) => {
		SecureStore.setItemAsync(key, value);
	},
	removeItem: (key: string) => {
		SecureStore.deleteItemAsync(key);
	},
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: ExpoSecureStoreAdapter,
		autoRefreshToken: true,
	},
});

export interface SignInResponse {
	data: { user: User } | null;
	error: Error | null;
}

export interface SignUpResponse {
	data: { user: User } | null;
	error: Error | null;
}

export interface SignOutResponse {
	error: Error | null;
	data: {} | null;
}

export const login = async (email: string, password: string): Promise<SignInResponse> => {
	try {
		const { data, error } = await supabaseClient.auth.signInWithPassword({
			email,
			password,
		});
		if (error) throw error;
		return { data: { user: data.user! }, error: null };
	} catch (error) {
		return { data: null, error: error as Error };
	}
};

export const createAccount = async (
	email: string,
	password: string,
	username: string
): Promise<SignInResponse> => {
	try {
		const { data, error } = await supabaseClient.auth.signUp({
			email,
			password,
		});

		if (error) throw error;

		await supabaseClient.auth.updateUser({
			data: { username },
		});

		return { data: { user: data.user! }, error: null };
	} catch (error) {
		return { data: null, error: error as Error };
	}
};

export const logout = async (): Promise<SignOutResponse> => {
	try {
		const { error } = await supabaseClient.auth.signOut();
		if (error) throw error;
		return { error: null, data: {} };
	} catch (error) {
		return { error: error as Error, data: null };
	}
};
