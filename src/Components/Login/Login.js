import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/firebaseConfig';
import { UserContext } from '../../App'
import { useHistory, useLocation,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
      }).catch(error => {
        console.log(error)
      });
  }

  return (
    <div className="container">
      <div className="imgDiv">
        <Link to="/">
          <img src="https://i.imgur.com/eqzzoJJ.png" height="50" width="150" alt="" />
          </Link>
      </div>
      <div className="loginDiv">
        <h2><b>Login With</b></h2>
        <button
          className="googleSign"
          onClick={googleSignIn}>
          <FontAwesomeIcon icon={faGoogle} />
             Continue with Google
             </button>
      </div>
    </div>
  );
};

export default Login;