import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

const Menu = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Greenprint</Link>
      </Navbar.Brand>

      <Navbar.Toggle areia-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link>
          <Link to="/calculator">Calculator</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="events">Events</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="blog">Blog</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="about">About</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="contact">Contact Us</Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default withRouter(Menu);
