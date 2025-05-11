import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
	id: string;
	email: string;
	displayName: string;
}

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface AuthState {
	status: AuthStatus,
	uid: string | null,
	email: string | null,
	displayName: string | null,
	photoURL: string | null,
	errorMessage: string | null,
}

const initialState: AuthState = {
	status: 'not-authenticated',
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
		},

		logout: (state, payload: PayloadAction<string>) => {

		},

		checkingCredentials: (state) => {
			state.status = 'checking';
		},
	}
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;