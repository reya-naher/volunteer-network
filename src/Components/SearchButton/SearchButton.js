import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0)
    },
    marginLeft: theme.spacing(10),
    flex: 1,
    border: "1px solid black",
    color: "black"
  },
  searchHeader: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "20px",
      textAlign:"center"
    }
  },
  searchDiv: {
    margin:"auto",
    width: "45%",
    height:"120px",
    [theme.breakpoints.down('xs')]: {
      marginBottom:"50px"
    }

  }
  
}));

const SearchButton = () => {
  const classes = useStyles();
  return (

    <div className={classes.searchDiv}>
      <h1 className={classes.searchHeader}>
        I GROW BY HELPING PEOPLE IN NEED
      </h1>
      <InputBase
        className={classes.search}
        placeholder="Search…">
      </InputBase>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary">
        Search
        </Button>

    </div>
  );
};

export default SearchButton;