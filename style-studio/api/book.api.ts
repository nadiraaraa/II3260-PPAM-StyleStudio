import { supabaseClient } from '@/lib/supabase';

export interface Book {
	id: string;
	created_at: string;
	alterCount: number;
	createCount: number;
	total: number;
	paymentMethod: string;
	tailorId: string;
	custId: string;
	reviewed: boolean;
}

export const createBook = async (
	alterCount: number,
	createCount: number,
	total: number,
	paymentMethod: string,
	tailorId: string,
	custId: string
) => {
	const { error } = await supabaseClient
		.from('book')
		.insert([{ alterCount, createCount, total, paymentMethod, tailorId, custId }]);
	if (error) {
		console.log(error);
		throw error;
	}
};
