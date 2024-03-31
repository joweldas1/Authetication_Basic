import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login2 = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider=new GithubAuthProvider();

  
  const handleGit=()=>{
    signInWithPopup(auth,gitProvider)
    .then((result) => {
      const results=result.user;
      console.log(results);
      setUser(results)
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleOnClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const res = result.user;
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        const er = err.message;
        console.log(er);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log("sign out successfull", result);
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };
  return (
    <div>
      {user ? 
        <button onClick={handleLogOut}>Log Out</button>
       : 
       <>
       <button onClick={handleOnClick}>Login Bro</button>
       <button onClick={handleGit}>Login git</button>
       </>
      }
      {user && (
        <div>
          <h3>user: {user.displayName}</h3>
          <h3>Email : {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login2;
