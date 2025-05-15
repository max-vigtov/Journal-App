import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Note {
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
	isSaving: true,
	messageSaved: '',
	notes: [],
	active: null,
};

export const journalSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
		addNewEmptyNote: (state, action: PayloadAction<Note>) => {

		},
		setActiveNote: (state, action: PayloadAction<Note>) => {

		},
		setNotes: (state, action: PayloadAction<Note[]>) => {

		},
		setSaving: (state) => {

		},
		updateNote: (state, action: PayloadAction<Note>) => {

		},
		deleteNoteById: (state, action: PayloadAction<string>) => {

		},
	}
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;

// Export the reducer
export default journalSlice.reducer;