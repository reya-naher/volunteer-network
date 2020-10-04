import React from 'react';
import data from '../../FakeData/FakeData';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SearchButton from '../SearchButton/SearchButton';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "300px",
    margin: "1em",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#309e67",
    boxShadow: "3px 4px 10px"
  },
  btnCustom: {
    width: "100%",
    fontWeight:"bold"
  },
  image: {
    objectFit:"fit"
  }
});

const Works = () => {
  const classes = useStyles();

  const history = useHistory()
  const handleWork = (work) => {
    history.push(`/register/${work}`);
  }

  return (
    <>

      <SearchButton></SearchButton>
    <Grid item xs={12} container spacing={2} 
        justify = "center">
      {
        data.map(item =>
          <Card className={classes.root}>
     <CardMedia className={classes.image}
          component="img"
              alt="Contemplative Reptile"
              width="100%"
          height="140"
          image={item.image}
          title="Contemplative Reptile"
            />
            <CardActions>
              <Button onClick={()=>handleWork(item.name)} className={classes.btnCustom}>{item.name}</Button>
               </CardActions>
        </Card>)
      }
      </Grid>
      </>
  );
};

export default Works;