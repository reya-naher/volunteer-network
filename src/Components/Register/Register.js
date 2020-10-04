import React from 'react';
import './Register.css'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';
const Register = () => {
  const {work} = useParams()
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    console.log(data)
  }
 
  return (
    <div>
      <h1>register</h1>
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}   

      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email"/>
      {errors.email && <span className="error">Email is required</span>} 
      
      <input name="description"  ref={register({ required: true })} placeholder="Description"/>
      {errors.description && <span className="error">Description is required</span>}

        <input name="work" defaultValue={work} ref={register({ required: true })} placeholder={work} />
        
      <button type="submit">register</button>
    </form>
    </div>
  );
};

export default Register;