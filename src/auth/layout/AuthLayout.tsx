import { Box, Typography } from "@mui/material"

interface AuthLayoutProps {
	children: React.ReactNode;
	title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
	<Box
		component="main"
		className="animate__animated animate__fadeIn animate__faster"
		sx={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		bgcolor: "primary.main",
		}}
  	>
	<Box
	  component="section"
	  className="box-shadow"
	  sx={{
		width: {
		  xs: "70%",
		  sm: "60%",
		  md: "40%",
		  lg: "30%",
		}, // Ancho responsivo
		bgcolor: "white",
		padding: { xs: 2, sm: 3, md: 4 }, // Padding responsivo
		borderRadius: 2,
	  }}
	>
	  <Typography variant="h4" sx={{ mb: 2, }}>
		{ title }
	  </Typography>

		{ children }

		</Box>
	</Box>
  )
}