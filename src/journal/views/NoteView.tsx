import { SaveOutlined } from "@mui/icons-material"
import { Box, Button, Grid, Typography, TextField } from '@mui/material';

export const NoteView = () => {
  return (
	<Grid container direction='column'>
		<Grid container direction='row' justifyContent='space-between' sx={{ md: 5 }}>
		  
			<Box>
				<Typography fontSize={ 39 } fontWeight='light'>28 de abril 2024</Typography>
			</Box>
			<Box>
				<Button color='primary' sx={{ padding: 2 }}>
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
			/>
			<TextField
				type="text"
				variant="filled"
				fullWidth
				multiline
				placeholder="¿Qué sucedió hoy?"				
				minRows={ 5 }
			/>
		</Grid>

	</Grid>
  )
}