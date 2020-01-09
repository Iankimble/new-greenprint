import React, { Component } from "react";
import { allEvents } from "./api";

import {
  Button,
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
  Row
} from "react-bootstrap";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      page: 1,
      limit: 2
    };
  }

  getEvents = () => {
    const limit = this.state.limit;
    const page = this.state.page;
    allEvents(page, limit).then(data => {
      if (data.error) {
        console.log("error");
      } else {
        this.setState({ events: data });
      }
      console.log(this.state.events);
    });
    let eventsData = this.state.events.reverse();
  };

  loadNext = () => {
    this.setState({ page: this.state.page + 1 });
    this.getEvents();
    console.log(this.state.page);
  };

  loadPrev = () => {
    this.setState({ page: this.state.page - 1 });
    this.getEvents();
    console.log(this.state.page);
  };

  componentDidMount() {
    this.getEvents(this.state.page);
    console.log(this.state.page);
  }

  renderEvents = events => {
    return (
      <div
        style={{
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        {events.map((event, i) => {
          return (
            <div key={i}>
              <CardGroup style={{ margin: "15px auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h1>{event.title}</h1>
                  </Card.Title>
                  <h3>{event.subTitle}</h3>
                  <h4>{event.eventDay}</h4>
                  <Card.Text> {event.body}</Card.Text>
                  <Button>Get tickets</Button>
                </Card.Body>
              </CardGroup>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { events } = this.state;
    return (
      <div>
        {this.renderEvents(events)}
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
            onClick={this.loadPrev}
          >
            Prev
          </Button>
          <Button
            size="lg"
            style={{ width: "200px", margin: "5px" }}
            onClick={(this, this.loadNext)}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}
export default Events;
