import React from 'react';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Container, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  register: {
    marginLeft: theme.spacing(2),
    padding: "5px 10px"
  },
  admin: {
    marginLeft: theme.spacing(2),
    backgroundColor: "black",
    color: "white",
    padding: "5px 10px"
  },
  iconBtnImg: {

  },
  navLink: {
    marginLeft: theme.spacing(2),
    color: "black",
    fontWeight: "bold"
  },

}));

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory()
  const handleAdmin = () => {
    history.push('/admin')
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Grid mt={2}
            container
          >
            <Grid item xs={12} sm={4} >
              <IconButton
                edge="start"
                className={classes.iconBtnImg}>
                <Link to="/">
                  <img src="https://i.imgur.com/eqzzoJJ.png"
                    height="50"
                    width="150"
                    alt="" />
                </Link>
              </IconButton>
            </Grid>
            <Grid
              item xs={12}
              sm={8} >
              <Link to="/">
                <Button className={classes.navLink}>Home </Button>
              </Link>
              <Button className={classes.navLink}>Donation </Button>
              <Button className={classes.navLink}>Events </Button>
              <Button className={classes.navLink}>Blog </Button>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.register}>
                  Register
                  </Button>
              </Link>
              <Button
                onClick={handleAdmin} variant="contained"
                className={classes.admin}>
                Admin
                </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;