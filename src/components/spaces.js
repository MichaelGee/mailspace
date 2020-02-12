import React from "react";
import Nav from "./nav";

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
          <button class='btnn success'>Mailspace</button>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
