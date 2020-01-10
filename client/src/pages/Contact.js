import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { render } from "@testing-library/react";
import { sendMsg } from "./api";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      to: "ian.kimble571@gmail.com",
      from: "",
      subject: "",
      text: "",
      error: ""
    };
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { from, subject, text, to } = this.state;
    const msg = {
      from,
      subject,
      text,
      to
    };
    console.log(msg);
    sendMsg(msg).then(msg => {
      if (msg.error) this.setState({ eror: msg.error });
      else
        this.setState({
          error: "",
          from: "",
          subject: "",
          text: ""
        });
    });
  };

  contactForm = (name, from, subject, text) => (
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
            <Form.Control
              type="name"
              placeholder=""
              onChange={this.handleChange("name")}
              value={name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              onChange={this.handleChange("from")}
              value={from}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={this.handleChange("subject")}
              value={subject}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              onChange={this.handleChange("text")}
              value={text}
            />
          </Form.Group>
        </Form>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Button
            size="lg"
            style={{ width: "200px", margin: "5px" }}
            onClick={this.submit}
          >
            Send
          </Button>
        </div>
      </Container>
    </div>
  );

  render() {
    const { name, from, subject, text } = this.state;
    return <div>{this.contactForm(name, from, subject, text)}</div>;
  }
}

export default Contact;
