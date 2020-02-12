import React, { useEffect } from "react";
import User from "./icons/user.png";
import firebaseConfig from "./fireConfig";
import M from "materialize-css";

const Nav = () => {
  useEffect(() => {
    let drop = document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
    });
    M.AutoInit();
  }, []);

  const user = firebaseConfig.auth().currentUser;
  return (
    <div>
      <ul id='dropdown1' className='dropdown-content'>
        <li>
          <a href='#!' onClick={() => firebaseConfig.auth().signOut()}>
            Logout
          </a>
        </li>
      </ul>
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            Dostow Spaces
          </a>
          <div className='img-container '>
            <ul className='right'>
              <li>
                <img className='img' src={User} />
              </li>
              <li>
                <a
                  className='dropdown-trigger'
                  href='#!'
                  data-target='dropdown1'
                >
                  <i className='material-icons right'>arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  <ul id='dropdown1' className='dropdown-content'>
        <li>
          <a href='#!'>one</a>
        </li>
        <li>
          <a href='#!'>two</a>
        </li>
        <li className='divider'></li>
        <li>
          <a href='#!'>three</a>
        </li>
      </ul>
      <nav>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo'>
            Logo
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Sass</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>

            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown1'>
                Dropdown<i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default Nav;
