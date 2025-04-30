import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
	<AppBar
		position='fixed'
		sx={{ 
			width: { sm: `calc(100% - ${drawerWidth}px)` },
			ml: { sm: `${drawerWidth}px` }
		 }}
	>
		<Toolbar>
			<IconButton
				color="inherit"
				edge="start"
				sx={{ mr: 2, display: { sm: 'none' } }}
			>
				<MenuOutlined/>
			</IconButton>

			<Box 
				sx={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Typography variant="h6" noWrap component="div">JournalApp</Typography>
				
				<IconButton color="error">
					<LogoutOutlined/>
				</IconButton>
			</Box>
		</Toolbar>
	</AppBar>
  )
}