import React from "react";
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

  // This causes a huge console error:
  // Error: Uncaught [TypeError: Cannot read properties of undefined (reading
  // "getObtainableValue")]
  test("Exception rendering ObtainablesTracker without props", () => {
    let exception = null;

    try {
      render(<ObtainablesTracker />);
  } catch(te) {
      exception = te;
    }

    expect(exception).not.toBeNull();
  });

  test("Renders ObtainablesTracker with TrackerState", () => {
    render(<ObtainablesTracker
             trackerState={testTrackerState}
           />);

    expect(screen.getByAltText("Gear overlay")).toBeInTheDocument();
    expect(screen.getByAltText("Items overlay")).toBeInTheDocument();
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
