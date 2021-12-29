import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// import Images from "../services/images";
import Map from "./map";

describe("Map", () => {
  const mapHyruleAltText       = "Map of Hyrule";
  const mapLoruleAltText       = "Map of Lorule";
  const changeMapButtonAltText = "Change map button";

  test("Renders Map with default Hyrule image", () => {
    render(<Map />);

    expect(screen.getByAltText(mapHyruleAltText)).toBeInTheDocument();
  });

  test("Renders Map with map change button", () => {
    render(<Map />);

    expect(screen.getByAltText(changeMapButtonAltText)).toBeInTheDocument();
  });

  test("Renders Lorule Map after the change map button is clicked", () => {
    render(<Map />);

    const mapOfHyrule = screen.getByAltText(mapHyruleAltText);
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);

    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(changeMapButton).toBeInTheDocument();
    expect(mapOfHyrule).not.toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleAltText)).toBeInTheDocument();
  });
});
