import { TurnedInNot } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, id, date, imageUrls }: { 
  title: string, 
  body: string, 
  id: string, 
  date: number,
  imageUrls: string[] 
}) => {

  const newTitle = useMemo(() => {
    return title.length > 17 
      ? title.substring(0, 17) + '...' 
      : title;
  }, [title])

  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch( setActiveNote( { id, title, body, date, imageUrls } ));
  }

  return (
    <ListItem key={id } disablePadding>
    <ListItemButton onClick={ onClick }>
      <ListItemIcon>
        <TurnedInNot />
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={ newTitle } />
        <ListItemText secondary={ body } />
      </Grid>
    </ListItemButton>
  </ListItem>        
  )
}