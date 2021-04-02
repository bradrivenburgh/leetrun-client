import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
  });

  test("renders the all the headings", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const expectedHeadings = [
      "LeetRun",
      "A better way to track your running journey",
      "Record your runs",
      "Track your progress",
      "Start your running journey now",
    ];

    const allHeadings = screen.getAllByRole("heading");
    const allHeadingsText = allHeadings.map((heading) => heading.textContent);
    expect(allHeadingsText).toEqual(expectedHeadings);
  });

  test("renders the 'Login as demo user' button", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const demoLoginButton = screen.getByRole("button", {
      name: "Login as demo user",
    });
    expect(demoLoginButton).toBeInTheDocument();
  });

  test("renders all images", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const expectedImgsAltText = [
      "record run form",
      "summary view, chart",
      "summary view, filters",
    ];
    const allImgs = screen.getAllByRole("img");
    const allImgsAltText = allImgs.map((img) => img.alt);
    expect(allImgsAltText).toEqual(expectedImgsAltText);
  });
});
