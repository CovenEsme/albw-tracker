import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Helper from "../services/helper";
import OBTAINABLES from "../data/obtainables.json";
import ObtainablesTracker from "./obtainables-tracker";
import TrackerState from "../services/tracker-state";

describe("ObtainablesTracker", () => {
  let testTrackerState: TrackerState;

  function testFunction() {};

  beforeEach(() => {
    testTrackerState = new TrackerState();
  });

  test("Renders ObtainablesTracker with props", () => {
    render(<ObtainablesTracker
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
             trackerState={testTrackerState}
           />);

    expect(screen.getByAltText("Gear overlay")).toBeInTheDocument();
    expect(screen.getByAltText("Items overlay")).toBeInTheDocument();
  });

  test("Renders ObtainablesTracker with all Obtainables", () => {
    render(<ObtainablesTracker
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
             trackerState={testTrackerState}
           />);

    let obtainable: string;

    for (obtainable in OBTAINABLES) {
      const obtainableObject = screen.getAllByAltText(
                                        Helper.fancyName(obtainable, 0));

      expect(obtainableObject[0]).toBeInTheDocument();
     }
  });
});
