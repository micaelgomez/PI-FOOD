import "./searchBar.css";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipeByName, getAllRecipes } from "../../Dispatch/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState({ name: " " });

  //agarra el nombre del input y lo setea en el estado
  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  //RELOAD RECEPIS
  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllRecipes());
  }

  //on submit-->Le mando lo que esta en el estado
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipeByName(name));

    setName(" ");
    document.getElementById("Find").reset();
  }

  return (
    <nav>
      <div className="nav">
        <Link to="/recipes">
          <span>Create New Recipe</span>
        </Link>

        <button onClick={(e) => handleClick(e)}> Reload Recipes </button>

        <form id="Find">
          <input
            type="text"
            placeholder="Recipe name"
            onChange={(e) => handleName(e)}
          />
          <button id="send" type="submit" onClick={(e) => handleSubmit(e)}>
            Search
          </button>
        </form>
      </div>

      <div className="titulos">
        <h1> Our Recipes </h1>
      </div>
    </nav>
  );
}
