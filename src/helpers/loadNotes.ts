import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";
import { Note } from "../store/journal";

export const loadNotes = async ( uid: string ) => {
	if ( !uid ) throw new Error('No hay usuario autenticado');

	const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );

	const docs = await getDocs( collectionRef );

	const notes: Note[] = [];

	docs.forEach( doc => {
		notes.push({ id: doc.id, ...doc.data() } as Note);
	});

	return notes;
}