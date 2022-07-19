import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
`

const StyledDiv = styled.div`
  margin-top: 36px; /* theme.spacing(8); */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledAvatar = styled(Avatar)`
  && {
    margin: 8px; /* theme.spacing(1) */
    background-color: #9c27b0;
  }
`

const StyledForm = styled.form`
  width: 100%;
  margin-top: 8px; /* theme.spacing(1) */
`

const SubmitButton = styled(Button)`
  && {
    margin: 8px 0px; /* theme.spacing(3, 0, 2); */
  }
`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©  '}
      <Link to="/">Mavata</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp({ onSignIn }) {
  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledDiv>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <StyledForm
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firm"
                label="Firm"
                name="firm"
                autoComplete="firm"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSignIn}
          >
            Sign Up
          </SubmitButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/auth/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledDiv>
      <Box mt={5}>
        <Copyright />
      </Box>
    </StyledContainer>
  );
}
