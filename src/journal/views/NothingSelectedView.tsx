import { StarOutline } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
	<Box
	component="main"
    sx={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "calc(100vh - 110px)", // Ajusta según tu layout
		width: "100%",
		bgcolor: "primary.main",
		borderRadius: 3,
	  }}
	>
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			gap: 2,
		}}>
			<StarOutline sx={{ fontSize: 100, color: "white" }} />
			<Typography variant="h5" color="white">Seleciona o crea una variante</Typography>
		</Box>
	</Box>
  )
}