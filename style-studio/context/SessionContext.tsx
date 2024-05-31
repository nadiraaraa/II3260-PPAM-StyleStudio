import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getUserById, User as MyUser } from '@/api/user.api';
import { supabaseClient, SignInResponse, SignUpResponse } from '@/lib/supabase';

interface SessionContextProps {
	user: User | null;
	profile: MyUser | null;
	session: Session | null;
	isLoading: boolean;
	signIn: (email: string, password: string) => Promise<SignInResponse>;
	signUp: (
		email: string,
		password: string,
		full_name: string,
		city: string,
		telephone: string
	) => Promise<SignUpResponse>;
	signOut: () => Promise<void>;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const useSession = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error('useSession must be used within a SessionProvider');
	}
	return context;
};

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [profile, setProfile] = useState<MyUser | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getSession = async () => {
			try {
				const { data } = await supabaseClient.auth.getSession();
				setSession(data.session);
				setUser(data.session?.user ?? null);
				console.log(data.session)
				setProfile(await getUserById(data.session?.user?.id!));
				console.log(profile);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};

		getSession();

		const { data: listener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_IN') {
				setSession(session);
				setUser(session?.user ?? null);
				setProfile(await getUserById(session?.user?.id!));
			} else if (event === 'SIGNED_OUT') {
				setSession(null);
				setUser(null);
				setProfile(null);
			}
		});
	}, []);
	  

	const signIn = async (email: string, password: string): Promise<SignInResponse> => {
		const response = await supabaseClient.auth.signInWithPassword({ email, password });
		if (response.error) {
			return { data: null, error: response.error };
		}
		setUser(response.data.user!);
		setSession(response.data.session);
		return { data: { user: response.data.user! }, error: null };
	};

	const signUp = async (
		email: string,
		password: string,
		full_name: string,
		city: string,
		telephone: string
	): Promise<SignUpResponse> => {
		const response = await supabaseClient.auth.signUp({
			email,
			password,
			options: { data: { full_name, city, telephone } },
		});
		if (response.error) {
			return { data: null, error: response.error };
		}
		setUser(response.data.user!);
		setSession(response.data.session);
		return { data: { user: response.data.user! }, error: null };
	};

	const signOut = async () => {
		await supabaseClient.auth.signOut();
		setUser(null);
		setSession(null);
	};

	return (
		<SessionContext.Provider
			value={{ user, profile, session, isLoading, signIn, signUp, signOut }}
		>
			{children}
		</SessionContext.Provider>
	);
};
