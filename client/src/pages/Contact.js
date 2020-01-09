import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const Contact = () => (
  <div>
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h1>Contact</h1>
      <p style={{ textAlign: "center", margin: "15px" }}>
        For financial questions or sugestions to improve our site, Please
        contact us. We'd love to here from you!
      </p>
    </div>
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control type="subject" placeholder="" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>
      </Form>
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <Button size="lg" style={{ width: "200px", margin: "5px" }}>
          Send
        </Button>
      </div>
    </Container>
  </div>
);

export default Contact;
