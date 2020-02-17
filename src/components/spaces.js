import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

const Spaces = () => {
  return (
    <div>
      <Nav />
      <h3 className='spaces_header'>Your Spaces</h3>
      <div className='mailspace'>
        <div className='mailspace_address'>
          <p>osiloke.com</p>
        </div>
        <div className='mailspace_button'>
          <Link to='/mailspace'>
            <button class='btnn success'>Mailspace</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
