import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    return (
      <ul className="EventList">
        if!(events) return null
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
