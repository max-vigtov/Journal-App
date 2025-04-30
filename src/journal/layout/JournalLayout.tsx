import { Box } from "@mui/material"
import { NavBar } from "../components";

interface JournalLayoutProps {
	children: React.ReactNode;
}

const drawerWidth = 240;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
	<Box sx={{ display: 'flex' }}>
		{/* Navbar */}
		<NavBar drawerWidth={ drawerWidth }/>

		{/* SideBar */}
		<Box
			component='main'
			sx={{  flexGrow: 1, p: 3 }}
		>
			{/* Toolbar */}
			
			{ children }
		</Box>
	</Box>
  )
}