import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Map from "./map";

describe("Map", () => {
  const mapHyruleAltText       = "Map of Hyrule";
  const mapLoruleAltText       = "Map of Lorule";
  const changeMapButtonAltText = "Change map button";

  const mapHyruleLabelAltText  = "Hyrule map label";
  const mapLoruleLabelAltText  = "Lorule map label";
  const mapHyruleLabelText     = "Hyrule";
  const mapLoruleLabelText     = "Lorule";

  let changeMapButton: HTMLElement;
  let mapOfHyrule:     HTMLElement;
  let mapLabel:        HTMLElement;
  let mapLabelText:    HTMLElement;

  beforeEach(() => {
    render(<Map />);

    changeMapButton = screen.getByAltText(changeMapButtonAltText);
    mapOfHyrule     = screen.getByAltText(mapHyruleAltText);
    mapLabel        = screen.getByAltText(mapHyruleLabelAltText);
    mapLabelText    = screen.getByText(mapHyruleLabelText);
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
    fireEvent.mouseOver(changeMapButton);

    expect(screen.getByText("Change Map")).toBeInTheDocument();

    fireEvent.mouseOut(changeMapButton);

    expect(screen.getByText(mapHyruleLabelText)).toBeInTheDocument();
  })

  test("Changes map label text on mouse over change map (Lorule)", () => {
    fireEvent.click(changeMapButton);
    fireEvent.mouseOver(changeMapButton);

    expect(screen.getByText("Change Map")).toBeInTheDocument();

    fireEvent.mouseOut(changeMapButton);

    expect(screen.getByText(mapLoruleLabelText)).toBeInTheDocument();
  })

  test("Renders Lorule Map after the change map button is clicked", () => {
    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();
    expect(mapLabel).toBeInTheDocument();
    expect(mapLabelText).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(mapOfHyrule).not.toBeInTheDocument();
    expect(mapLabel).not.toBeInTheDocument();
    expect(mapLabelText).not.toBeInTheDocument();

    expect(changeMapButton).toBeInTheDocument();

    expect(screen.getByAltText(mapLoruleAltText)).toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleLabelAltText)).toBeInTheDocument();
    expect(screen.getByText(mapLoruleLabelText)).toBeInTheDocument();
  });

  test("Renders the correct Map after the change map button is toggled", () => {
    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();

    expect(mapLabel).toBeInTheDocument();
    expect(mapLabelText).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(mapOfHyrule).not.toBeInTheDocument();
    expect(mapLabel).not.toBeInTheDocument();
    expect(mapLabelText).not.toBeInTheDocument();

    expect(changeMapButton).toBeInTheDocument();

    expect(screen.getByAltText(mapLoruleAltText)).toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleLabelAltText)).toBeInTheDocument();
    expect(screen.getByText(mapLoruleLabelText)).toBeInTheDocument();

    fireEvent.click(changeMapButton);

    expect(mapOfHyrule).toBeInTheDocument();
    expect(changeMapButton).toBeInTheDocument();

    expect(mapLabel).toBeInTheDocument();
    expect(mapLabelText).toBeInTheDocument();

    expect(screen.getByAltText(mapLoruleAltText)).not.toBeInTheDocument();
    expect(screen.getByAltText(mapLoruleLabelAltText)).not.toBeInTheDocument();
    expect(screen.getByText(mapLoruleLabelText)).not.toBeInTheDocument();
  });
});