import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react"; //Permite ver si renderiza un componente
import SearchBar from "./searchBar";

test(" Renders content", () => {
  const component = render(<SearchBar />);
  console.log(component);
});
