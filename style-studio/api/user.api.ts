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

export const upgradeToTailor = async (
	userId: string,
	address: string,
	createPrice: number,
	alterPrice: number,
	month: number
) => {
	let updateResponse = await supabaseClient
		.from('user')
		.update({ isTailor: true })
		.eq('uid', userId);
	if (updateResponse.error) {
		console.log(updateResponse.error);
		throw updateResponse.error;
	}

	let createResponse = await supabaseClient.from('tailor').insert({
		tailorId: userId,
		address,
		createPrice,
		alterPrice,
		contractEnd: new Date(Date.now() + month * 30 * 24 * 60 * 60 * 1000).toISOString(),
	});
	if (createResponse.error) {
		console.log(createResponse.error);
		throw createResponse.error;
	}
};
