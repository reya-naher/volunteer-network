import React, { useState } from 'react';
import './Admin.css';
import { Button, Container, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';

const Admin = () => {
  const [info, setInfo] = useState({})
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo)
  }
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }
  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', info.name)
    fetch('https://powerful-shelf-03829.herokuapp.com/addWorks', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert("New event added")
      })
      .catch(error => {
        console.error(error)
      })
  }

  const history = useHistory()

  const handleBtnList = () => {
    history.push('/seelist')
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
        <Grid item xs={12} md={9}>
          <h1 className="headLine"> Add Event</h1>
          <div className="eventDiv">

            <form className="form-design" onSubmit={handleSubmit}>
              <label
                htmlFor="name">
                <b>Event Title</b>
              </label>
              <br />

              <input
                onBlur={handleBlur}
                type="text"
                name="name"
                className="input-admin"
                id="name"
                placeholder="Service Name" />

              <label
                className="event"
                htmlFor="date">
                <b>Event Date:</b>
              </label>

              <input
                type="date"
                id="date"
                className="input-date"
                name="date"
                defaultValue={new Date()} />
              <br />
              <label
                htmlFor="description"
                className="description">
                <b>Description</b>
              </label>
              <br />

              <textarea
                type="text"
                className="input-description"
                placeholder="Description"
                name="description"
                id="description"
                cols="50"
                rows="3">
              </textarea>

              <span className="icon-label">
                <b>icon</b>
              </span>
              <label
                htmlFor="file upload"
                className="style-file-btn">
                <PeopleIcon />
              Upload Icon
              </label>

              <input
                onChange={handleFileChange}
                className="order-fil-upload"
                type="file"
                name="file upload"
                id="file upload" />

              <br />
              <button
                type="submit"
                className="admin-btn"
              >
                Submit
                </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;