import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Leaderboards from "./Leaderboards";

describe("Leaderboards", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Leaderboards />
      </BrowserRouter>
    );
  });
});