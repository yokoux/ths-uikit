import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { Button } from ".";
import { render } from "@/setupTests";

test("show button", () => {
  const testTitle = "hello";
  // @ts-ignore
  render(<Button variant="text">{testTitle}</Button>);

  expect(screen.queryByText(testTitle)).toBeInTheDocument();
});
