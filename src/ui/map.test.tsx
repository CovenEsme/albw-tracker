import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Map from "./map";

describe("Map", () => {
  const mapHyruleAltText       = "Map of Hyrule";
  const mapLoruleAltText       = "Map of Lorule";
  const changeMapButtonAltText = "Change map button";

  beforeEach(() => {
    render(<Map />);
  });

  test("Renders Map with default Hyrule image", () => {
    expect(screen.getByAltText(mapHyruleAltText)).toBeInTheDocument();
  });

  test("Renders Map with map change button", () => {
    expect(screen.getByAltText(changeMapButtonAltText)).toBeInTheDocument();
  });

  test("Renders Lorule Map after the change map button is clicked", () => {
    const mapOfHyrule = screen.getByAltText(mapHyruleAltText);
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);

    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(changeMapButton).toBeInTheDocument();
    expect(mapOfHyrule).not.toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleAltText)).toBeInTheDocument();
  });

  test("Renders the correct Map after the change map button is toggled", () => {
    const mapOfHyrule = screen.getByAltText(mapHyruleAltText);
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);

    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(changeMapButton).toBeInTheDocument();
    expect(mapOfHyrule).not.toBeInTheDocument();

    const mapOfLorule = screen.getByAltText(mapLoruleAltText);
    expect(mapOfLorule).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(changeMapButton).toBeInTheDocument();
    expect(mapOfLorule).not.toBeInTheDocument();

    expect(mapOfHyrule).toBeInTheDocument();
  });
});