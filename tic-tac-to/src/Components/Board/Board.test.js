import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

describe("Board tests", () => {
  it("should render", () => {
    expect(render(<Board />)).toBeTruthy();
  });
});
