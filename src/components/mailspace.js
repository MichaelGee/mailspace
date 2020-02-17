import React, { useEffect } from "react";
import Nav from "./nav";
import M from "materialize-css";

const Mailspace = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
      edge: "right"
    });
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <ul class='sidenav' id='mobile-demo'>
          <li>
            <a href='sass.html'>Sass</a>
          </li>
          <li>
            <a href='badges.html'>Components</a>
          </li>
          <li>
            <a href='collapsible.html'>Javascript</a>
          </li>
          <li>
            <a href='mobile.html'>Mobile</a>
          </li>
        </ul>
      </div>
      <button
        type='button'
        data-target='mobile-demo'
        class='sidenav-trigger right'
      >
        Sidenav
      </button>
    </div>
  );
};

export default Mailspace;
