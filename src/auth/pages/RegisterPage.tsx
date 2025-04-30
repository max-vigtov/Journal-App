import { Box, TextField, Button, Typography, Link } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "column" }, // Column en móvil, fila en grande
        gap: 2, // Espaciado entre los campos
      }}
    >
      
      <TextField        
        label="Nombre completo"
        type="text"
        placeholder="John Doe"
        size="small"
        fullWidth
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        placeholder="email@google.com"
        size="small"
        fullWidth
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="password"
        size="small"
        fullWidth
      />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        mt: 2
      }}
    >
        <Box sx={{ width: { xs: '100%' } }}>
          <Button variant='contained' fullWidth>
            Crear cuenta
          </Button>
        </Box>

    </Box>

    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'flex-end',
        mt: 1
      }}
    >
      <Typography>
        <Link component={RouterLink} color='inherit' to="/auth/login">
          ¿Ya tienes cuenta?
        </Link>
      </Typography>
    </Box>
</AuthLayout>
  )
}