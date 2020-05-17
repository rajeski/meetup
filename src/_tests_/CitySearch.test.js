import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";

describe("<CitySearch /> component", () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch />);
  });

  test("render text input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("render suggestion(s) list", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  test("render correct text input", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("change state when text input is changed", () => {
    const eventObject = { target: { value: "Berlin" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
  });

  test("render correct suggestion list", () => {
    const suggestions = CitySearchWrapper.state("suggestions");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(
      suggestions.length
    );
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find(".suggestions li").at(i).text()).toBe(
        suggestions[i].name_string
      );
    }
  });

  test("click on suggestion... this should change query state", () => {
    CitySearchWrapper.setState({
      suggestions: [
        {
          city: "Munich",
          country: "de",
          localized_country_name: "Germany",
          name_string: "Munich, Germany",
          zip: "meetup3",
          lat: 48.14,
          lon: 11.58,
        },
        {
          city: "Munich",
          country: "us",
          localized_country_name: "USA",
          state: "ND",
          name_string: "Munich, North Dakota, USA",
          zip: "58352",
          lat: 48.66,
          lon: -98.85,
        },
      ],
    });
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe("Munich, Germany");
  });
});
