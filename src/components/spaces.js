import React from "react";
import firebaseConfig from "./fireConfig";

const Spaces = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <a
        type='submit'
        class='waves-effect waves-light btn'
        onClick={() => firebaseConfig.auth().signOut()}
      >
        Sign Out
      </a>
    </div>
  );
};

export default Spaces;
