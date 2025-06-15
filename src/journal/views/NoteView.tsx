import { SaveOutlined } from "@mui/icons-material"
import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useForm } from "../../hooks";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {

	const dispatch = useDispatch<AppDispatch>();

	const { active: note } = useSelector((state: RootState) => state.journal);

	const { body, title, date, onInputChange, formState } = useForm( note );
	
	const dateString = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date])

	useEffect(() => {
	  dispatch( setActiveNote(formState) )
	}, [formState])

	const onSaveNote = () => {
		dispatch( startSaveNote() );
	}

	return (
		<Grid container direction='column' className="animate__animated animate__fadeIn animate__faster">
		<Grid container direction='row' justifyContent='space-between' sx={{ md: 5 }}>
		  
			<Box>
				<Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
			</Box>
			<Box>
				<Button 
					onClick={ onSaveNote }
					color='primary' 
					sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
					Guardar
				</Button>
			</Box>
		</Grid>

		<Grid container>
			<TextField
				type="text"
				variant="filled"
				fullWidth
				placeholder="Ingrese un título"
				label="Título"
				sx={{ mb: 1, border: 'none' }}
				name="title"
				value={ title }
				onChange={ onInputChange }
			/>
			<TextField
				type="text"
				variant="filled"
				fullWidth
				multiline
				placeholder="¿Qué sucedió hoy?"				
				minRows={ 5 }
				name="body"
				value={ body }
				onChange={ onInputChange }
			/>
		</Grid>
		<ImageGallery/>
	</Grid>
  )
}