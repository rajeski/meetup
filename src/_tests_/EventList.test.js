import React from "react";
import { shallow } from "enzyme";
import App from "../App"; // Unsure why this value is never read / used

import EventList from "../EventList";
import Event from "../Event";

describe("<App /> component", () => {
  test("render the correct number of events", () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({
      events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
