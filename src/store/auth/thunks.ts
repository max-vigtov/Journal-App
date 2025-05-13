import { checkingCredentials, login, logout } from "./authSlice";
import { AppDispatch } from "../../store";
import { loginUserEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider";

export const checkingAuthentication = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );

		const result = await signInWithGoogle();

		if ( !result.ok ) return dispatch( logout( result.errorMessage || 'Error en la autenticación' ));

		dispatch( login({
			uid: result.uid || '',
			email: result.email || '',
			displayName: result.displayName || '',
			photoURL: result.photoURL || '',
			status: 'authenticated',
			errorMessage: null
		}));
    }
}

export const startRegisterWithEmailPassword = ( email: string, password: string, displayName: string ) => {
	return async( dispatch: AppDispatch ) => {
		dispatch( checkingCredentials() );

		const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

		if ( !ok ) return dispatch( logout( errorMessage || 'Error al usuario' ));

		dispatch( login({
			uid: uid || '',
			email: email || '',
			displayName: displayName || '',
			photoURL: photoURL || '',
			status: 'authenticated',
			errorMessage: null
		}));
	}

}

export const startLoginWithEmailPassword = ( email: string, password: string ) => {
	return async( dispatch: AppDispatch ) => {
		dispatch( checkingCredentials() );
		const { ok, uid, photoURL, displayName, emailResult, errorMessage } = await loginUserEmailPassword({ email, password });

		if ( !ok ) return dispatch( logout( errorMessage || 'Error en la autenticación' ));

		dispatch( login({
			uid: uid || '',
			email: emailResult || '',
			displayName: displayName || '',
			photoURL: photoURL || '',
			status: 'authenticated',
			errorMessage: null
		}));
	}
}