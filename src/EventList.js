import React from "react";
import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul className="EventList">
      {console.log(events)}
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
