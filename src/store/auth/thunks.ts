import { checkingCredentials, login, logout } from "./authSlice";
import { AppDispatch } from "../../store";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider";

export const checkingAuthentication = ( email: string, password: string ) => {
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
			id: result.uid || '',
			email: result.email || '',
			displayName: result.displayName || ''
		}));
    }
}


export const startRegisterWithEmailPassword = ( email: string, password: string, displayName: string ) => {
	return async( dispatch: AppDispatch ) => {
		dispatch( checkingCredentials() );

		const resp = await registerUserWithEmailPassword({ email, password, displayName });

		console.log(resp);
		
	}

}