import { collection, doc, setDoc } from "firebase/firestore";
import { AppDispatch, RootState } from "../store";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, Note, setActiveNote, savingNewNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
	return async ( dispatch: AppDispatch, getState: () => RootState ) => {
		dispatch( savingNewNote());

		const { uid } = (getState()).auth;
		
		const newNote: Note = {
			id: '',
			title: '',
			body: '',
			date: new Date().getTime(),
			imageUrls: [],
		}

		const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
		await setDoc( newDoc, newNote );

		newNote.id = newDoc.id;
		dispatch( addNewEmptyNote( newNote ));
		dispatch( setActiveNote( newNote ));
	}
}


export const startLoadingNotes = () => {
	return async ( dispatch: AppDispatch, getState: () => RootState ) => {
		const { uid } = (getState()).auth;

		if ( !uid ) throw new Error('No hay usuario autenticado');
		
		const notes = await loadNotes( uid );
		dispatch( setNotes( notes ));
	}
}