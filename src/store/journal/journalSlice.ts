import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Note {
	id: string;
	title: string;
	body: string;
	date: number;
	imageUrls: string[];
}

interface JournalState {
	isSaving: boolean;
	messageSaved: string;
	notes: Note[];
	active: Note | null;
}

const initialState: JournalState = {
	isSaving: false,
	messageSaved: '',
	notes: [],
	active: null,
};

export const journalSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, action: PayloadAction<Note>) => {
			state.notes.push( action.payload );
			state.isSaving = false;
		},
		setActiveNote: (state, action: PayloadAction<Note>) => {
			state.active = action.payload;
			state.isSaving = false;
			state.messageSaved = '';
		},
		setNotes: (state, action: PayloadAction<Note[]>) => {
			state.notes = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
			state.messageSaved = '';
		},
		updateNote: (state, action: PayloadAction<Note>) => {
			state.isSaving = false;
			state.notes = state.notes.map( note => {
				if ( note.id === state.active?.id ) {
					return action.payload
				}
				return note;
			});
			state.messageSaved = `${ action.payload.title } actualizada correctamente`;
		},
		setPhotosToActiveNote: (state, action) => {
			if (state.active) {
				state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
			}
			state.isSaving = false;
		},
		clearNotesLogout: (state) => {
			state.isSaving = false,
			state.messageSaved = '',
			state.notes = [],
			state.active = null;
		},
		deleteNoteById: (state, action: PayloadAction<string>) => {

		},
	}
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions;

// Export the reducer
export default journalSlice.reducer;