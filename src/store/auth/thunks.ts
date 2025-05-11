import { checkingCredentials } from "./authSlice";
import { AppDispatch } from "../../store";
import { signInWithGoogle } from "../../firebase/provider";

export const checkingAuthentication = ( email: string, password: string ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );

		const result = await signInWithGoogle();
    }
}