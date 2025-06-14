import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { logout, login } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {

	const status = useSelector((state: RootState) => state.auth.status);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
	
		onAuthStateChanged( FirebaseAuth, (user) => {
			if ( !user ) return dispatch(logout(''));
			
			const { uid, email, displayName, photoURL } = user;

			dispatch(login({
				uid,
				email,
				displayName,
				photoURL,
				status: 'authenticated',
				errorMessage: null
			}));

			dispatch( startLoadingNotes());
		})
	}, [])

	return {
		status
	}
}
