import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LBoard from "./LBoard";

describe("LBoard", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <LBoard />
      </BrowserRouter>
    );
  });
});
