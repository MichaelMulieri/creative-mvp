import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main div", () => {
  const { container } = render(<App />);
  const mainDiv = container.querySelector("main.App");
  expect(mainDiv).toBeInTheDocument();
});
