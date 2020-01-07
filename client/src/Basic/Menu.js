import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="events">Events</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
