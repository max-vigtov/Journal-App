import { collection, doc, setDoc } from "firebase/firestore";
import { AppDispatch, RootState } from "../store";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, Note, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
	return async ( dispatch: AppDispatch, getState: () => RootState ) => {
		dispatch( savingNewNote() );

		const { uid } = (getState()).auth;
		
		const newNote: Note = {
			id: '',
			title: '',
			body: '',
			date: new Date().getTime(),
			imageUrls: [],
		}

		const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
		newNote.id = newDoc.id;
		await setDoc( newDoc, newNote );

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

export const startSaveNote = () => {
	return async ( dispatch: AppDispatch, getState: () => RootState ) => {

		dispatch( setSaving());
		const { uid } = (getState()).auth;
		const { active: note } = (getState()).journal;

		if ( note === null ) return;

		const { id, ...noteToFirestore } = note;

		const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ id }` );

		await setDoc( docRef, noteToFirestore, { merge: true } );	
		
		dispatch( updateNote( note ));
	}
}

export const startUploadingFiles = ( files: FileList ) => {
	return async ( dispatch: AppDispatch ) => {
		dispatch(setSaving());

		await fileUpload( files[0] );
	}
}