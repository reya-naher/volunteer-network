import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import { Button, Container, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';

const VolunteerList = () => {
  const history = useHistory()

  const [task, setTask] = useState([])
  useEffect(() => {
    fetch('https://powerful-shelf-03829.herokuapp.com/activitieslist')
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  const handleBtnEvent = () => {
    history.push('/admin')
  }

  const deleteTask = (id) => {
    fetch(`https://powerful-shelf-03829.herokuapp.com/delete/${id}`, {
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
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Link to="/">
            <img
              className="imgAdmin"
              src="https://i.imgur.com/eqzzoJJ.png"
              height="50"
              width="150"
              alt="" />
          </Link>
          <Button>
            <PeopleIcon />
            Volunteer Registration List
            </Button>
          <Button
            onClick={handleBtnEvent}>
            <AddIcon />
            Add Event
            </Button>
        </Grid>
        <Grid item xs={12} md={9}>
          <h1 className="headLine"> Add Event</h1>
          <table className="volunteers">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Volunteer List</th>
                <th>Action</th>
              </tr>
            </thead>

            {
              task.map((item, index) =>
                <tbody key={index}>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.startWork}</td>
                    <td>{item.work}</td>
                    <td onClick={() => deleteTask(item._id)}>
                      <DeleteIcon className="delete" />
                    </td>
                  </tr>
                </tbody>
              )}
          </table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VolunteerList;