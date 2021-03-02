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

  test("contains a form with required input fields", () => {
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

  test("contains 'Submit' and 'Cancel' buttons", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );

    screen.getByRole('button', {name: 'Submit'});
    screen.getByRole('button', {name: 'Cancel'});
  });

});