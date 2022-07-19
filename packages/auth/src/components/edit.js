// Signin

const useStyles = makeStyles((theme) => ({
  containerAuth {
    position: relative;
    
  }
  paper {
    margin-top: theme.spacing(8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  avatar {
    margin: theme.spacing(1);
    background-color: theme.palette.secondary.main;
  }
  form {
    width: 100%;
    margin-top: theme.spacing(1);
  }
  submit {
    margin: theme.spacing(3, 0, 2);
  }
}));

//Signup
const useStyles = makeStyles((theme) => ({
  paper {
    margin-top: theme.spacing(8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  avatar {
    margin: theme.spacing(1);
    background-color: theme.palette.secondary.main;
  }
  form {
    width: 100%;
    margin-top: theme.spacing(3);
  }
  submit {
    margin: theme.spacing(3, 0, 2);
  }
}));