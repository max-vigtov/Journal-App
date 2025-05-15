import { Google } from '@mui/icons-material';
import { Box, Button, TextField, Typography, Link, Alert, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useMemo } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { status, errorMessage } = useSelector((state: RootState) => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, isFormValid } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if ( !isFormValid ) return;
    dispatch( startLoginWithEmailPassword( email, password ) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "column" }, // Column en móvil, fila en grande
            gap: 2, // Espaciado entre los campos
          }}
        >
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
              <Button type="submit" variant='contained' fullWidth disabled={ isCheckingAuthentication }>
                Login
              </Button>
            </Box>
         
            <Box sx={{ width: { xs: '100%' } }}>
              <Button variant='contained' fullWidth onClick={ onGoogleSignIn } disabled={ isCheckingAuthentication }>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
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
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  );
};

