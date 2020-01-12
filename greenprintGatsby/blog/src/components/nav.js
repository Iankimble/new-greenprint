import React from "react"
import Link from "gatsby-link"
import { Nav, Navbar } from "react-bootstrap"

import logo from "../images/greenprint_revised_logo.png"

export const nav = () => (
  <div style={{ background: "grey", padding: "0px" }}>
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#7022c3" }}>
      <Navbar.Brand style={{ textAlign: "center" }}>
        <img
          src={logo}
          style={{
            height: "75px",
            width: "75px",
            margin: "2px",
            padding: "4px",
          }}
        />
        <Link to="/" style={{ color: "white" }}>
          The Greenprint Blog
        </Link>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
      </Navbar.Collapse> */}
    </Navbar>
  </div>
)

export default nav
