import React, { useContext } from 'react';
import Fb from '../../images/fb.png';
import Gl from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        //Google sign-in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });


    }

    const handleFBLogin = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    return (

        <form>
            <div style={{
                textAlign: 'center'
            }}>
                <h1>Login</h1>
                <input type="text" name="fname" placeholder="First Name" required />
                <br />
                <input type="text" name="lname" placeholder="Last Name" required />
                <br />
                <input type="email" name="email" placeholder="Username or Email" required />
                <br />
                <input type="password" name="password" placeholder="Enter Password" required />
                <br />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                <br />
                <input type="submit" value="Create an account" />
                {/* <input type="submit" value={ ? 'Sign up' : 'Sign in'} /> */}
                <br />
                <br />
                <p>Already have an account? <span style={{color:"red", textDecoration: "underline"}}>Login</span></p>
                <p>_____________Or____________</p>
                <br/> 
                <br/>                
                    <button onClick={handleGoogleSignIn} className="btn btn-outline-danger w-25"><img src={Gl} alt="" width="20px"/>Continue with Google</button>
                    <br/>
                    <button onClick={handleFBLogin} className="btn btn-outline-danger w-25" ><img src={Fb} alt="" width="20px"/>Continue with Facebook</button>
            </div>
        </form>
        
    );
};
export default Login;