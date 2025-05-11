import { checkingCredentials } from "./authSlice";
import { AppDispatch } from "../../store";

export const checkingAuthentication = ( email: string, password: string ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( checkingCredentials() );
    }
}