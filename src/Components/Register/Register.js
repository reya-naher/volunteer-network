import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const { loggedInUser, item } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data) => {
    const newData = { ...data, ...item }
    fetch('https://powerful-shelf-03829.herokuapp.com/addVolunteerTasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          history.push('/tasks');
        }
      })
  }

  return (
    <div className="container">
      <div className="imgDiv">
        <Link to="/">
          <img
            src="https://i.imgur.com/eqzzoJJ.png"
            height="50"
            width="150"
            alt="" />
        </Link>
      </div>

      <div className="registerDiv">
        <h1>Register As A Volunteer</h1>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

          <input
            name="name"
            defaultValue={loggedInUser.name}
            ref={register({ required: true })}
            placeholder="Your Name" />
          {errors.name && <span className="error">
            Name is required
            </span>}

          <input
            name="email"
            defaultValue={loggedInUser.email}
            ref={register({ required: true })}
            placeholder="Your Email" />
          {errors.email && <span className="error">
            Email is required</span>}

          <input
            type="date"
            id="start"
            name="startWork"
            defaultValue={new Date().toISOString().slice(0, 10)}
            ref={register({ required: true })}>
          </input>

          <input
            name="description"
            ref={register({ required: true })}
            placeholder="Description" />
          {errors.description && <span className="error">
            Description is required</span>}

          <input
            name="work"
            defaultValue={item.name}
            ref={register({ required: true })}
            placeholder={item.name}
          />
          <br />

          <Button
            className="registerBtn"
            variant="contained"
            color="primary"
            type="submit">
            register
          </Button>

        </form>
      </div>
    </div>
  );
};

export default Register;