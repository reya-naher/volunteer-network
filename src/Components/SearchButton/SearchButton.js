import React from 'react';
import './SearchButton.css'
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  search: { 
    marginLeft: theme.spacing(10),
    flex: 1,
    border:"1px solid black"
  }
}));

const SearchButton = () => {
  const classes = useStyles();
  return (
  
    <div className="searchBtn">
        <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <InputBase className={classes.search}>
          placeholder="Search…"
        </InputBase>
        <Button variant="contained" color="primary">Search</Button>
          
    </div>
  );
};

export default SearchButton;