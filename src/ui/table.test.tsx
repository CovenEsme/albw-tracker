import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Table from "./table";

describe("Table", () => {
  const testText = "Test text";
  const testTextList = [<div>Test0</div>,
                        <div>Test1</div>,
                        <div>Test2</div>,
                        <div>Test3</div>]

  test("Renders Table with 1 element", () => {
    render(<Table elements={[<div>{testText}</div>]} numColumns={1}/>);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("Renders Table with 0 elements", () => {
    let error = false;

    try {
      render(<Table elements={[]} numColumns={0}/>);
    } catch(e) {
      error = true;
    }

    expect(error).toBe(false);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.queryByText(testText)).toBeNull();
  });

  test("Renders Table with 1 element but 0 columns", () => {
    let error = false;

    try {
      render(<Table elements={[<div>{testText}</div>]} numColumns={0}/>);
    } catch(e) {
      error = true;
    }

    expect(error).toBe(false);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.queryByText(testText)).toBeNull();
  });

  test("Renders Table with 2x2 elements", () => {
    render(<Table elements={testTextList}
                  numColumns={2}
                  />);

    for (let textIndex = 0; textIndex < testTextList.length; textIndex++) {
      expect(screen.getByText("Test"
                              + textIndex.toString())).toBeInTheDocument();
    }
  });

  test("Renders Table with 2x1 elements", () => {
    const newTestTextList = testTextList.slice(0, 3)

    render(<Table elements={newTestTextList}
                  numColumns={2}
                  />);

    for (let textIndex = 0; textIndex < newTestTextList.length; textIndex++) {
      expect(screen.getByText("Test"
                              + textIndex.toString())).toBeInTheDocument();
    }
  });
});
