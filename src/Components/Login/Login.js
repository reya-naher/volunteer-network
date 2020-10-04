import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/firebaseConfig';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom';

export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(res => {
    console.log(res)
    const signedOutUser = {
      name: '',
      email: ''
    }
    return signedOutUser;
  }).catch(err => {
    console.log(err)
  });
}

const Login = () => { 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
        // storeAuthToken();
        history.replace(from);
    }).catch(error => {
      console.log(error)
    });   
  }

  
  // const storeAuthToken = () => {
  //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem('token',idToken)
  //   }).catch(function(error) {
  //     // Handle error
  //   });
  // }

    return (
      <div>
        <br></br>
            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;