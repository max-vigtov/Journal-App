import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const SideBar = ({ drawerWidth = 240 }: { drawerWidth?: number }) => {

  const { displayName } = useSelector((state: RootState) => state.auth);
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {`Hola, ${displayName}`}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(month => (
              <ListItem key={month} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={month} />
                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
          
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}