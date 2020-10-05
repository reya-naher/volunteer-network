import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
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
  }
});

const EventTasks = () => {
  const classes = useStyles();
  const [task, setTask] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  useEffect(() => {
    fetch('http://localhost:5000/activities?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          console.log(result)
          const filterData = task.filter(item => item._id !== id)
          setTask(filterData)
        }
      })
  }

  return (
    <>
      <Navbar></Navbar>
      <Grid item xs={12} container spacing={2}
        justify="center">
        {
          task.map((item, index) =>
            <Card key={index} className={classes.root}>
              <CardContent>
                <h2>{item.name}</h2>
                <h2>{item.work}</h2>
                <h2>{item.startWork}</h2>
                <Button className="cancelBtn" style={{ backgroundColor: "#E3E3E3" }} variant="contained" onClick={() => deleteTask(item._id)}>Cancel</Button>
              </CardContent>
            </Card>)
        }
      </Grid>
    </>
  );
};

export default EventTasks;