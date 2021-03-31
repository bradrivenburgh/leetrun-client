import { render, screen } from "@testing-library/react";
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
});
