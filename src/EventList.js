import React, { Component } from "react";
import Event from "./Event.js";
import "./App.css";

class EventList extends Component {
  render() {
    if (!this.props.events);
    return (
      <ul className="EventList">
        {this.props.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}
export default EventList;
