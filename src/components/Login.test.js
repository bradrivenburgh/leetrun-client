import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });
});
