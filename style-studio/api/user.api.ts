import { supabaseClient } from '@/lib/supabase';

export interface User {
	uid: string;
	name: string;
	email: string;
	photo: string;
	telephone: string;
	city: string;
	isTailor: boolean;
	createdAt: string;
}

export const getUserById = async (userId: string) => {
	const { data, error } = await supabaseClient.from('user').select('*').eq('uid', userId);
	if (error) {
		console.log(error);
		throw error;
	} else {
		console.log(data);
		if (data.length === 0) return null;
		return data[0] as User;
	}
};
