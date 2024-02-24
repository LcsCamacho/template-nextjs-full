import { render, screen } from "@testing-library/react";
import { Testando } from "./Testando";
import React from "react";

describe("<Testando/>", () => {
  it("should render the Testando component", () => {
    render(<Testando />);
    expect(screen.getByTestId("TestandoTestId")).toBeInTheDocument();
  });
});
