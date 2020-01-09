import React from "react";
import { Jumbotron, Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => (
  <div>
    <Jumbotron fluid style={{ height: "80vh", marginTop: "25px" }}>
      <Container style={{ textAlign: "center" }}>
        <h1>Welcome to Green print 'MERN'</h1>
        <h3>
          <i>financial freedom, one step at a time</i>
        </h3>
      </Container>
    </Jumbotron>
  </div>
);

export default Main;
