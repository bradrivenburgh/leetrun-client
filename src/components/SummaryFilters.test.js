import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SummaryFilters from "./SummaryFilters";

describe("SummaryFilters", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <SummaryFilters />
      </BrowserRouter>
    );
  });
});
