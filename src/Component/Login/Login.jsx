import React, { useState } from "react";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSigning = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log("yes its working");
  };
  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGitLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const results=result.user
        setUser(results)
        console.log(results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>LogOut</button>
      ) : (
        <>
          <button onClick={handleGoogleSigning}>Google Login</button>
          <button onClick={handleGitLogin}> Github Login </button>
        </>
      )}
      {user && (
        <div>
          <h3>user : {user.displayName} </h3>
          <h3>Email : {user.email} </h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
