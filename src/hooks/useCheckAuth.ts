import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { logout, login } from "../store/auth";

export const useCheckAuth = () => {

	const status = useSelector((state: RootState) => state.auth.status);
	const dispatch = useDispatch();

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
		})
	}, [])

	return {
		status
	}
}
