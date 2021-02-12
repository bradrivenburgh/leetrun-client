import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SummaryEntry from "./SummaryEntry";

describe("SummaryEntry", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <SummaryEntry />
      </BrowserRouter>
    );
  });
});
