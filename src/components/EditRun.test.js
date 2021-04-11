import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("includes an 'Edit run' heading", () => {
    render(
      <BrowserRouter>
        <EditRun />
      </BrowserRouter>
    );

    const editRunHeading = screen.getByRole("heading", { name: /edit run/i });
    expect(editRunHeading).toBeInTheDocument();
  });

  test("includes 'Date', 'Location', 'Distance', 'Time', 'Weather', 'Surface', 'Terrain', and 'Notes' fields", () => {
    render(
      <BrowserRouter>
        <EditRun />
      </BrowserRouter>
    );

    const date = document.getElementById("date");
    const location = screen.getByRole("textbox", { name: /location/i });
    const distance = screen.getByRole("spinbutton", { name: /distance/i });
    const time = screen.getAllByRole("spinbutton", { name: "" });
    const weather = screen.getAllByRole("radio");
    const surface = screen.getByRole("combobox", { name: /surface/i });
    const terrain = screen.getByRole("combobox", { name: /terrain/i });
    const notes = screen.getByRole("textbox", { name: /notes/i });

    expect(date).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
    expect(time.length).toBe(3);
    time.forEach((field) => expect(field).toBeInTheDocument());
    expect(weather.length).toBe(3);
    weather.forEach((field) => expect(field).toBeInTheDocument());
    expect(surface).toBeInTheDocument();
    expect(terrain).toBeInTheDocument();
    expect(notes).toBeInTheDocument();
  });

  test("contains 'Submit' and 'Cancel' buttons", () => {
    render(
      <BrowserRouter>
        <EditRun />
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
        <EditRun />
      </BrowserRouter>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  test("the 'Submit' button is enabled when all required fields are filled in", async () => {
    render(
      <BrowserRouter>
        <EditRun />
      </BrowserRouter>
    );

    const datePicker = screen.getByTestId("date-picker");
    userEvent.clear(datePicker);
    // Needs to be entered as yyyy-mm-dd
    userEvent.type(datePicker, "2020-01-02");

    const location = screen.getByRole("textbox", { name: /location/i });
    userEvent.clear(location);
    userEvent.type(location, "Philadelphia, PA");

    const distance = screen.getByRole("spinbutton", {
      name: /distance/i,
    });
    userEvent.clear(distance);
    userEvent.type(distance, "5");

    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    userEvent.type(hours, "00");
    userEvent.type(minutes, "00");
    userEvent.type(seconds, "00");

    expect(await screen.findByRole("button", { name: "Submit" })).toBeEnabled();
  });

  test("Pressing 'Submit' calls setAllRuns and setAllRunsCopy", async () => {
    const props = {
      allRunsCopy: [],
      currentRun: {
        id: "1",
        date: "",
        location: "",
        distance: "",
        hours: "",
        minutes: "",
        seconds: "",
        weather: "",
        surface: "",
        terrain: "",
        notes: "",
        public: false,
      },
      setAllRuns: jest.fn(),
      setAllRunsCopy: jest.fn(),
    };

    render(
      <BrowserRouter>
        <EditRun props={ props } />
      </BrowserRouter>
    );
    const datePicker = screen.getByTestId("date-picker");
    userEvent.clear(datePicker);
    // Needs to be entered as yyyy-mm-dd
    userEvent.type(datePicker, "2020-01-02");
    const location = screen.getByRole("textbox", { name: /location/i });
    userEvent.clear(location);
    userEvent.type(location, "Philadelphia, PA");
    const distance = screen.getByRole("spinbutton", {
      name: /distance/i,
    });
    userEvent.clear(distance);
    userEvent.type(distance, "5");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    userEvent.type(hours, "00");
    userEvent.type(minutes, "00");
    userEvent.type(seconds, "00");

    // Click Submit and expect state setters to have been called
    const submitBtn = await screen.findByRole("button", { name: "Submit" });
    userEvent.click(submitBtn);

    expect(props.setAllRuns).toHaveBeenCalledTimes(1);
    expect(props.setAllRunsCopy).toHaveBeenCalledTimes(1);
  });
});
