import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
		login: (state, { payload }: PayloadAction<AuthState>) => {
			state.status = 'authenticated';
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.errorMessage = null;
		},

		logout: (state, { payload }: PayloadAction<string>) => {
			state.status = 'not-authenticated';
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload;
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