import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		//const credentials = GoogleAuthProvider.credentialFromResult(result);

		//if ( !result.user ) throw new Error('No se pudo iniciar sesión con Google');
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName, 
			email, 
			photoURL, 
			uid
		}
		
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			ok: false,
			errorMessage: firebaseError.message
		}
	}
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }: { email: string, password: string, displayName: string }) => {

	try {
		const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

		const { photoURL, uid } = result.user;

		await updateProfile(result.user, { displayName });
				
		return {
			ok: true,
			displayName, 
			email, 
			photoURL, 
			uid
		}
		
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			ok: false,
			errorMessage: firebaseError.message
		}
	}
}

export const loginUserEmailPassword = async ({ email, password }: { email: string, password: string }) => {

	try {
		const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

		const { photoURL, uid, displayName, email: emailResult } = result.user;
				
		return {
			ok: true,
			displayName, 
			emailResult, 
			photoURL, 
			uid
		}
		
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			ok: false,
			errorMessage: firebaseError.message
		}
	}
}
