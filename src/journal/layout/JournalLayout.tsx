import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from "../components";

interface JournalLayoutProps {
	children: React.ReactNode;
}

const drawerWidth = 280;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
	<Box sx={{ display: 'flex' }}>
		{/* Navbar */}
		<NavBar drawerWidth={ drawerWidth }/>

		{/* SideBar */}
		<SideBar drawerWidth={ drawerWidth }/>

		<Box
			component='main'
			sx={{ 
				flexGrow: 1,
				p: 3,
				mt: { xs: 6, sm: 8 } // margen para compensar el navbar
			}}
		>
			{/* Toolbar */}
			<Toolbar/>
			{ children }
		</Box>
	</Box>
  )
}