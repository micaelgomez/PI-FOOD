import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Card from "../Components/Card/card";

test("render content vegan", () => {
  const array = ["vegan", "primal"];
  const component = render(<Card arrayDiets={array} />);
  expect(component.container).toHaveTextContent("vegan");
});
test("render content gluten free", () => {
  const array = ["vegetarian", "gluten free"];
  const component = render(<Card arrayDiets={array} />);
  expect(component.container).toHaveTextContent("gluten free");
});
