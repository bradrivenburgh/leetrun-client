import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Summary from "./Summary";

describe("Summary", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Summary />
      </BrowserRouter>
    );
  });
});
