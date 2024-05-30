import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabaseClient, SignInResponse, SignUpResponse } from '@/lib/supabase';

interface SessionContextProps {
	user: User | null;
	session: Session | null;
	isLoading: boolean;
	signIn: (email: string, password: string) => Promise<SignInResponse>;
	signUp: (email: string, password: string, full_name: string) => Promise<SignUpResponse>;
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
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getSession = async () => {
			const { data } = await supabaseClient.auth.getSession();
			setSession(data.session);
			setUser(data.session?.user ?? null);
			console.log(data);
			setIsLoading(false);
		};

		getSession();

		const { data: listener } = supabaseClient.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN') {
				setSession(session);
				setUser(session?.user ?? null);
			} else if (event === 'SIGNED_OUT') {
				setSession(null);
				setUser(null);
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
		full_name: string
	): Promise<SignUpResponse> => {
		const response = await supabaseClient.auth.signUp({
			email,
			password,
			options: { data: { full_name } },
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
		<SessionContext.Provider value={{ user, session, isLoading, signIn, signUp, signOut }}>
			{children}
		</SessionContext.Provider>
	);
};