import React from 'react';
import './Admin.css'
import { Button, Container, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';

const Admin = () => {
  const handleWorks = () => {
    const tasks = {}
    fetch('http://localhost:5000/addWorks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tasks)
    })
  }

  const history = useHistory()

  const handleBtnList = () => {
    history.push('/seelist')
  }
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Link to="/">
            <img
              className="imgAdmin"
              src="https://i.imgur.com/eqzzoJJ.png"
              height="50"
              width="150"
              alt="" />
          </Link>
          <Button
            onClick={handleBtnList}>
            <PeopleIcon />
            Volunteer Registration List
            </Button>
          <Button>
            <AddIcon />
            Add Event
            </Button>
        </Grid>
        <Grid item xs={9}>
          <h1 className="headLine"> Add Event</h1>
          <div className="eventDiv">

            <form onSubmit={handleWorks} className="form-design">
              <input
                type="text"
                name="name"
                className="input-text"
                placeholder="Event-Title" required />
              <label
                htmlFor="Banner"
                className="banner">
                <b>Event Date:</b>
              </label>
              <input
                type="date"
                id="start"
                name="registrationDate"
                defaultValue={new Date()}
                min="2020-01-01"
                max="2030-12-31" required />
              <textarea
                rows="4"
                cols="50"
                type="text"
                name="description"
                className="input-text"
                placeholder="Description" required />
              <label
                htmlFor="Banner"
                className="banner">
                <b>Banner:</b>
              </label>
              <input
                type="file"
                name="image" required />
              <br />
              <Button
                variant="contained"
                color="primary"
                className="submit-btn"
                type="submit">
                Submit
                </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;