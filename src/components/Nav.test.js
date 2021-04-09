import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { node } from "prop-types";

import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  });

  test("when logged-out, renders with the 'Sign-up' and 'Login' links", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const linkText = ["LeetRun", "Sign-up", "Login", "Summary", "Record run"];
    const links = screen.getAllByRole("link");
    const nodeText = links.map((link) => link.textContent);
    expect(nodeText).toEqual(linkText);

    const linkHrefs = [
      "/",
      "/create-account",
      "/login",
      "/summary",
      "record-run",
    ];
    const nodeHrefs = links.map((link) => link.href);
    nodeHrefs.forEach((href, i) => expect(href).toContain(linkHrefs[i]));
  });

  test("when logged-in, renders with 'Logout' link and without 'Sign-up' and 'Login' links", () => {
    const loggedIn = true;
    const setLoggedIn = jest.fn();

    render(
      <BrowserRouter>
        <Nav props={{ loggedIn, setLoggedIn }} />
      </BrowserRouter>
    );

    const linkText = ["LeetRun", "Logout", "Summary", "Record run"];
    const links = screen.getAllByRole("link");
    const nodeText = links.map((link) => link.textContent);
    expect(nodeText).toEqual(linkText);

    const linkHrefs = ["/", "/", "/summary", "record-run"];
    const nodeHrefs = links.map((link) => link.href);
    nodeHrefs.forEach((href, i) => expect(href).toContain(linkHrefs[i]));
  });

  test("when logged-in, clicking 'Logout' calls setLoggedIn()", () => {
    const loggedIn = true;
    const setLoggedIn = jest.fn();

    render(
      <BrowserRouter>
        <Nav props={{ loggedIn, setLoggedIn }} />
      </BrowserRouter>
    );

    const loginLink = screen.getByRole("link", { name: /logout/i });
    userEvent.click(loginLink);
    expect(setLoggedIn).toHaveBeenCalledTimes(1);
  });
});
