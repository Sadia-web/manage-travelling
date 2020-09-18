import React, { useContext } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import {firebaseConfig} from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    


    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // if (firebase.app.length === 0) {
    //     firebase.initializeApp(firebaseConfig);
    // }

    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }

        //Google sign-in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        //Authenticate with Firebase using the Google provider object.
        firebase.auth().signInWithPopup(provider).then(function (result) {

            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }

    const handleFBLogin = () => {

        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }

        //Facebook sign-in provider
        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }



    return (

        <form >

            <div
                style={{
                    textAlign: 'center',
                    border: '3px solid lightgrey',
                    margin: '100px',
                    borderRadius: '7px',
                    padding: '20px'

                }}
            >
                <h1>Login</h1>
                <input type="text" name="fname" placeholder="First Name" required />
                <br />
                <input type="text" name="lname" placeholder="Last Name" required />
                <br />
                <input type="email" name="email" placeholder="Username or Email" required />
                <br />
                <input type="password" name="password" placeholder="Password" required />
                <br />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <br />
                <input type="submit" value="Create an account" />
                {/* <input type="submit" value={ ? 'Sign up' : 'Sign in'} /> */}

            <br />
                <button onClick={handleGoogleSignIn} className="btn btn-outline-dark w-25">Google Sign In</button>
                <br />
            {
                    <button onClick={handleFBLogin} className="btn btn-outline-dark w-25" >Sign in using Facebook</button>
            }
            </div>
        </form>
    );
};

export default Login;