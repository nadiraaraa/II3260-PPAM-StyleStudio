import { supabaseClient } from '@/lib/supabase';
import { User } from './user.api';

export interface Tailor {
	tailorId: string;
	address: string;
	alterPrice: number;
	createPrice: number;
	boosted: boolean;
	contractEnd: string;
	user?: User;
}

export const fetchTailors = async () => {
	const { data, error } = await supabaseClient.from('tailor').select(`*, user(*)`);
	if (error) {
		console.log(error);
		throw error;
	} else {
		console.log(data);
		return data as Tailor[];
	}
};

export const fetchTailorById = async (tailorId: string) => {
	const { data, error } = await supabaseClient
		.from('tailor')
		.select(`*, user(*)`)
		.eq('tailorId', tailorId);
	if (error) {
		console.log(error);
		throw error;
	} else {
		console.log(data);
		if (data.length === 0) return null;
		return data[0] as Tailor;
	}
};
