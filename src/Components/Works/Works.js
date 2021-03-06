import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SearchButton from '../SearchButton/SearchButton';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
  root: {
    width: "260px",
    margin: "1em",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "3px 4px 10px"
  },
  btnCustom: {
    width: "100%",
    fontWeight: "bold"
  },
  image: {
    objectFit: "fit"
  }
});

const Works = () => {
 const getRandomColor = () => {
    let colorValues = ["SlateGrey", "Peru", "Teal","SeaGreen"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  }
  const classes = useStyles();
  const {setItem} = useContext(UserContext)
  const [work, setWork] = useState([])
  useEffect(() => {
    fetch('https://powerful-shelf-03829.herokuapp.com/works')
      .then(res => res.json())
      .then(data => setWork(data))
  }, [])

  const history = useHistory()
  const handleWork = (work) => {
    setItem(work)
    history.push(`/register`);
    
  }

  return (
    <>
      <SearchButton></SearchButton>
      <Grid item xs={12} container spacing={2}
        justify="center">
        {
          work.map((item, index) =>
            <Card key={index} style={{   backgroundColor: `${getRandomColor()}`}} className={classes.root}>
              <CardMedia className={classes.image}
                component="img"
                alt="card image"
                width="100%"
                height="140"
                image={
                  item.image.img ? `data:image/png;base64,${item.image.img}` : item.image
                }
                title="card image"
              />
              <CardActions>
                <Button
                  onClick={() => handleWork(item)}
                  className={classes.btnCustom}>
                  {item.name}
                </Button>
              </CardActions>
            </Card>
          )
        }
      </Grid>
    </>
  );
};

export default Works;