import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { UserContext } from '../../App';

const useStyles = makeStyles({
  root: {
    width: "300px",
    margin: "1em",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#309e67",
    boxShadow: "3px 4px 10px"
  },
  image: {
    objectFit: "fit"
  }
});

const EventTasks = () => {
  const classes = useStyles();
  const [task, setTask] = useState([])
  const { loggedInUser } = useContext(UserContext)

  useEffect(() => {
    fetch('https://powerful-shelf-03829.herokuapp.com/activities?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  const deleteTask = (Id) => {
    console.log(Id)
    fetch(`https://powerful-shelf-03829.herokuapp.com/delete/${Id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          console.log("result", result)
          const filterData = task.filter(item => item._id !== Id)
          setTask(filterData)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Navbar></Navbar>
      <Grid item xs={12} container spacing={2}
        justify="center">
        {
          task.map((taskItem, index) =>
            <Card key={index} className={classes.root}>
              <CardMedia className={classes.image}
                component="img"
                alt="card image"
                width="100%"
                height="140"
                image={taskItem.image}
                title="card image"
              />
              <CardContent>
                <h2>{taskItem.work}</h2>
                <h2>{taskItem.startWork}</h2>
                <Button className="cancelBtn" style={{ backgroundColor: "#E3E3E3" }} variant="contained" onClick={() => deleteTask(taskItem._id)}>Cancel</Button>
              </CardContent>
            </Card>)
        }
      </Grid>
    </>
  );
};

export default EventTasks;