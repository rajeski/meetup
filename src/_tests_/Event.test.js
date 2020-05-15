import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event";
import EventDetails from "../EventDetails";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render event(s) date / time", () => {
    expect(EventWrapper.find(".eventDate")).toHaveLength(1);
  });
  test("render event(s) name(s)", () => {
    expect(EventWrapper.find(".eventName")).toHaveLength(1);
  });
  test("render group(s) name", () => {
    expect(EventWrapper.find(".groupName")).toHaveLength(1);
  });
  test("render total number of people attending", () => {
    expect(EventWrapper.find(".yesRSVP")).toHaveLength(1);
  });
  test("render event details button", () => {
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });
  test("render event(s) details", () => {
    expect(EventWrapper.find(EventDetails)).toHaveLength(1);
  });
  test("click on event details button displays/expands info", () => {
    expect(EventWrapper.state("showDetails")).toEqual(false);
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.find(EventDetails).prop("isOpen")).toEqual(true);
  });
  test("click on event details button event info collapses", () => {
    expect(EventWrapper.state("showDetails")).toEqual(true);
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.find(EventDetails).prop("isOpen")).toEqual(false);
  });
});
