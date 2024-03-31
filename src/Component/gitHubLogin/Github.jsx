import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";

const Github = () => {
    const [user,setUser]=useState('')
  const design = {
    border: "5px solid white",
    backgroundColor: "red",
    color: "white",
  };
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const handleToClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const results = result.user;
        setUser(results)
        console.log(results);
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });   
  };
  const logOut=()=>{
    signOut(auth)
    .then((result) => {
        setUser('')
        
    }).catch((err) => {
        console.log(err.message);
    });
  }

  return (
    <div>

        
        { user ?
        <button onClick={logOut} style={{...design}} >Log Out</button>:
      <button onClick={handleToClick} style={{ ...design }}>
        Login with github
      </button>}


    </div>
  );
};

export default Github;
