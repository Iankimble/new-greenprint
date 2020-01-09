import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const About = () => (
  <div>
    <div>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>
        About Greenprint
      </h1>
      <Jumbotron fluid style={{ height: "50vh", margin: "50px" }}>
        <Container style={{ textAlign: "center" }}></Container>
      </Jumbotron>
      <p style={{ height: "", margin: "50px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export default About;
