import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "./table";

describe("Table", () => {
  const testText = "Test text";
  const testTextList = ["Test1", "Test2", "Test3", "Test4"]

  test("Renders Table with 1 element", () => {
    render(<Table elements={[<div>{testText}</div>]}/>);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("Renders Table with 0 elements", () => {
    let error = false;

    try {
      render(<Table />);
    } catch(e) {
      error = true;
    }

    expect(error).toBe(false);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  test("Renders Table with 2x2 elements", () => {
    render(<Table elements={testTextList}
                  numColumns={2}
                  />);

    for (let textIndex = 0; textIndex < testTextList.length; textIndex++) {
      expect(screen.getByText(testTextList[textIndex])).toBeInTheDocument();
    }
  });

  test("Renders Table with 2x1 elements", () => {
    const newTestTextList = testTextList.slice(0, 3)

    render(<Table elements={newTestTextList}
                  numColumns={2}
                  />);

    for (let textIndex = 0; textIndex < newTestTextList.length; textIndex++) {
      expect(screen.getByText(newTestTextList[textIndex])).toBeInTheDocument();
    }
  });
});
