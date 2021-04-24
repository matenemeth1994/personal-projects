import React from "react";
import { render } from "@testing-library/react";
import Square from "./Square";

describe("Square tests", () => {
  it("should render", () => {
    expect(render(<Square />)).toBeTruthy();
  });
});
