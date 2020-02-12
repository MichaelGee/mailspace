import React from "react";
import { render } from "@testing-library/react";
import { add } from "./App";

test("add two numbers", () => {
  const value = add(2, 2);
  expect(value).toBe(4);
});
