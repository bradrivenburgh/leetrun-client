import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateAccount from "./CreateAccount";

describe("CreateAccount", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );
  });

  test("contains a heading,'Sign-up'", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );

    screen.getByText('Sign-up'); 
    screen.getByRole('heading');
  })

  test("contains a form with required fields", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );

    screen.getByLabelText(/user name/i);
    screen.getByLabelText(/first name/i);
    screen.getByLabelText(/last name/i);
    screen.getByLabelText("Password:");
    screen.getByLabelText(/repeat/i);
  })

  
});