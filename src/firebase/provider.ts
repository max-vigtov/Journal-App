import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		//const credentials = GoogleAuthProvider.credentialFromResult(result);

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