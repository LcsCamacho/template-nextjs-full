import { render } from "@testing-library/react";
import Home from "./page";
import React from "react";

describe("first test", () => {
  it("should render div", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });
});
