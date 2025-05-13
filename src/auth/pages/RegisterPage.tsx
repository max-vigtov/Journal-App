import { Box, TextField, Button, Typography, Link, Grid, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value: string) => value.includes('@'), 'El correo debe tener un @' ],
  displayName: [ (value: string) => value.length >= 1, 'El nombre es obligatorio' ],
  password: [ (value: string) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector((state: RootState) => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { displayName, 
          email, 
          password, 
          onInputChange, 
          isFormValid, 
          displayNameValid, 
          emailValid, 
          passwordValid 
        } = useForm( formData, formValidations );


  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startRegisterWithEmailPassword( email, password, displayName ));
  }

  return (
    <AuthLayout title="Crear cuenta">
      {/* <h1>FormValid: { isFormValid ? 'Válido' : 'Incorrecto'}</h1> */}
      <form onSubmit={ onSubmit }>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "column" },
            gap: 2,
          }}
        >
          <TextField        
            label="Nombre completo"
            type="text"
            placeholder="John Doe"
            size="small"
            fullWidth
            name="displayName"
            value={ displayName }
            onChange={ onInputChange }
            error={ !!displayNameValid && formSubmitted }
            helperText={ displayNameValid }
          />

          <TextField
            id="email"
            label="Email"
            type="email"
            placeholder="email@google.com"
            size="small"
            fullWidth 
            name="email"
            value={ email }
            onChange={ onInputChange }
            error={ !!emailValid && formSubmitted }
            helperText={ emailValid }
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="password"
            size="small"
            fullWidth
            name="password"
            value={ password }
            onChange={ onInputChange }
            error={ !!passwordValid && formSubmitted }
            helperText={ passwordValid }
          />
        </Box>
        <Grid container>          
            <Box
              sx={{
                display: errorMessage ? '' : 'none',
                pt: 2,
                width: { xs: '100%', }
              }}
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Box>
          </Grid>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mt: 2
          }}
        >
          <Box sx={{ width: { xs: '100%' } }}>
            <Button variant='contained' fullWidth type="submit" disabled={ isCheckingAuthentication }>
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
      </form>
    </AuthLayout>
  )
}