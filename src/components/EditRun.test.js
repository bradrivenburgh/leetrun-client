import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EditRun from "./EditRun";

describe("EditRun", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <EditRun />
      </BrowserRouter>
    );
  });
});
