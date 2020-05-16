import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import EventList from "../components/EventList";
import CitySearch from "../components/CitySearch";
// import NumberOfEvents from "../components/NumberOfEvents";
// import { mockEvents } from "../components/mock-events";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});

// Integration test
// describe("<App /> integration", () => {
//   test("get list of events after user selects a city", () => {
//     const AppWrapper = mount(<App />);
//     AppWrapper.instance().updateEvents = jest.fn();
//     AppWrapper.instance().forceUpdate();
//     const CitySearchWrapper = AppWrapper.find(CitySearch);
//     CitySearchWrapper.instance().handleItemClicked("value", 1.1, 1.2);
//     expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
//     expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
//     AppWrapper.unmount();
//   });

//   test("get list of events after user specifies number of events", () => {
//     const AppWrapper = mount(<App />);
//     AppWrapper.instance().updateEvents = jest.fn();
//     AppWrapper.instance().forceUpdate();
//     const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
//     NumberOfEventsWrapper.instance().onNumberChanged({ target: { value: 5 } });
//     expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
//     expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(
//       null,
//       null,
//       5
//     );
//     AppWrapper.unmount();
//   });

//   test("change state after get list of events", async () => {
//     const AppWrapper = shallow(<App />);
//     AppWrapper.instance().updateEvents(1.1, 1.2);
//     await AppWrapper.update();
//     expect(AppWrapper.state("events")).toEqual(mockEvents.events);
//   });

//   test("render correct list of events", () => {
//     const AppWrapper = mount(<App />);
//     AppWrapper.setState({
//       events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
//     });
//     expect(AppWrapper.find(".Event")).toHaveLength(4);
//     AppWrapper.unmount();
//   });
// });
