import React from "react"
import Link from "gatsby-link"
import { Nav, Navbar } from "react-bootstrap"

export const nav = () => (
  <div style={{ background: "grey", padding: "0px" }}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Greenprint</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/calculator">Calculator</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/events">Events</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default nav
