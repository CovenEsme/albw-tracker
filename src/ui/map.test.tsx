import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// import Images from "../services/images";
import Map from "./map";

describe("Map", () => {
  const mapHyruleAltText       = "Map of Hyrule";
  const mapLoruleAltText       = "Map of Lorule";
  const changeMapButtonAltText = "Change map button";
  const mapHyruleLabelAltText  = "Hyrule map label";
  const mapLoruleLabelAltText  = "Lorule map label";
  const mapHyruleLabelText     = "Hyrule";
  const mapLoruleLabelText     = "Lorule";

  beforeEach(() => {
    render(<Map />);
  });

  test("Renders Map with default Hyrule image", () => {
    expect(screen.getByAltText(mapHyruleAltText)).toBeInTheDocument();
  });

  test("Renders Map with map change button", () => {
    expect(screen.getByAltText(changeMapButtonAltText)).toBeInTheDocument();
  });

  test("Renders map label", () => {
    expect(screen.getByAltText(mapHyruleLabelAltText)).toBeInTheDocument();
  });

  test("Renders map label with default location text (Hyrule)", () => {
    expect(screen.getByText(mapHyruleLabelText)).toBeInTheDocument();
  });

  test("Changes map label text on mouse over change map (Hyrule)", () => {
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);

    fireEvent.mouseOver(changeMapButton);

    expect(screen.getByText("Change Map")).toBeInTheDocument();

    fireEvent.mouseOut(changeMapButton);

    expect(screen.getByText(mapHyruleLabelText)).toBeInTheDocument();
  })

  test("Changes map label text on mouse over change map (Lorule)", () => {
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);

    fireEvent.click(changeMapButton);
    fireEvent.mouseOver(changeMapButton);

    expect(screen.getByText("Change Map")).toBeInTheDocument();

    fireEvent.mouseOut(changeMapButton);

    expect(screen.getByText(mapLoruleLabelText)).toBeInTheDocument();
  })

  test("Renders Lorule Map after the change map button is clicked", () => {
    const mapOfHyrule = screen.getByAltText(mapHyruleAltText);
    const changeMapButton = screen.getByAltText(changeMapButtonAltText);
    const mapLabel = screen.getByAltText(mapHyruleLabelAltText);
    const mapLabelText = screen.getByText(mapHyruleLabelText);

    expect(changeMapButton).toBeInTheDocument();
    expect(mapOfHyrule).toBeInTheDocument();
    expect(mapLabel).toBeInTheDocument();
    expect(mapLabelText).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(changeMapButton).toBeInTheDocument();

    expect(mapOfHyrule).not.toBeInTheDocument();
    expect(mapLabel).not.toBeInTheDocument();
    expect(mapLabelText).not.toBeInTheDocument();

    expect(screen.getByAltText(mapLoruleAltText)).toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleLabelAltText)).toBeInTheDocument();
    expect(screen.getByText(mapLoruleLabelText)).toBeInTheDocument();
  });
});
