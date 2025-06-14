import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

export const FloatingActionButton = ({ onClick, disabled }: { onClick: () => void, disabled?: boolean }) => (
  <IconButton
    size="large"
    disabled={disabled}
    sx={{
      color: 'white',
      backgroundColor: 'error.main',
      ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
      position: 'fixed',
      right: 50,
      bottom: 50,
    }}
    onClick={onClick}
  >
    <AddOutlined sx={{ fontSize: 30 }}/>
  </IconButton>
); 