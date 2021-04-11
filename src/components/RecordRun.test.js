import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("contains a heading,'Record run'", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", { name: /record run/i });
    expect(heading).toHaveTextContent("Record run");
  });

  test("includes 'Date', 'Location', 'Distance', 'Time', 'Weather', 'Surface', 'Terrain', and 'Notes' fields", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );

    const date = document.getElementById("date");
    expect(date).toBeInTheDocument();
    const location = screen.getByRole("textbox", { name: /location/i });
    expect(location).toBeInTheDocument();
    const distance = screen.getByRole("spinbutton", { name: /distance/i });
    expect(distance).toBeInTheDocument();
    const time = screen.getAllByRole("spinbutton", { name: "" });
    expect(time.length).toBe(3);
    time.forEach((field) => expect(field).toBeInTheDocument());
    const weather = screen.getAllByRole("radio");
    expect(weather.length).toBe(3);
    weather.forEach((field) => expect(field).toBeInTheDocument());
    const surface = screen.getByRole("combobox", { name: /surface/i });
    expect(surface).toBeInTheDocument();
    const terrain = screen.getByRole("combobox", { name: /terrain/i });
    expect(terrain).toBeInTheDocument();
    const notes = screen.getByRole("textbox", { name: /notes/i });
    expect(notes).toBeInTheDocument();
  });

  test("contains 'Submit' and 'Cancel' buttons", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );

    const submitBtn = screen.getByRole("button", { name: "Submit" });
    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    expect(submitBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  test("checks to make sure Submit button is disabled while required fields are empty", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  // TODO: Fix test
  test.skip("the Submit button is enabled when all required fields are completed", () => {
    render(
      <BrowserRouter>
        <RecordRun />
      </BrowserRouter>
    );

    const date = document.getElementById("date");
    userEvent.click(date);
    userEvent.clear(date)
    userEvent.type(date, "04/09/2021");
    console.log(document.getElementById("date").textContent)
    const location = screen.getByRole("textbox", { name: /location/i });
    userEvent.click(location);
    userEvent.type(location, "Philadelphia, PA");
    const distance = screen.getByRole("spinbutton", { name: /distance/i });
    userEvent.click(distance);
    userEvent.type(distance, "5");

    expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
  });
});
