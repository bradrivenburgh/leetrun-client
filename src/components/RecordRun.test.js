import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecordRun from "./RecordRun";

describe("RecordRun", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );
  });
});
