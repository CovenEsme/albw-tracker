import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Images from "../services/images";
import Obtainable from "./obtainable";

describe("Obtainable", () => {
  const testObtainableName      = "Test Obtainable";
  const testObtainableFancyName = "Test Obtainable Fancy";
  const testObtainableImage     = "test-obtainable.png";

  function testFunction() {};

  test("Renders Obtainable with fancy name", () => {
    render(<Obtainable
             obtainableName={testObtainableName}
             obtainableFancyName={testObtainableFancyName}
             obtainableImage={testObtainableImage}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    expect(screen.getByAltText(testObtainableFancyName)).toBeInTheDocument();
  });

  test("Renders Obtainable image", async () => {
    await Images.importImages();

    render(<Obtainable
             obtainableName={testObtainableName}
             obtainableFancyName="Test Fancy Name"
             obtainableImage={Images.getImage("Progressive Sword", 0)}
             incrementObtainable={testFunction}
             decrementObtainable={testFunction}
             setSelectedObtainable={testFunction}
             clearSelectedObtainable={testFunction}
           />);

    const testObtainableImage = await screen.findByRole("img");
    expect(testObtainableImage).toHaveAttribute("src", "sword-0.png");
  });
});
