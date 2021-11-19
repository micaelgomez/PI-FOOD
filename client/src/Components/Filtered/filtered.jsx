import "./filter.css";

import React from "react";
import {
  filterByScore,
  filteredByDiets,
  orderByName,
} from "../../Dispatch/action";
import { useDispatch } from "react-redux";

export default function Filtered({ paginate, setOrden1 }) {
  const dispatch = useDispatch();

  function handleDiets(e) {
    dispatch(filteredByDiets(e.target.value));
  }

  function handleScore(e) {
    e.preventDefault();
    dispatch(filterByScore(e.target.value));
    paginate(1);
    setOrden1(`Ordenado ${e.target.value}`); //Permite el re-renderizado
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    paginate(1);
    setOrden1(`Ordenado ${e.target.value}`); //Permite el re-renderizado
  }

  return (
    <div className="filter">
      <select onChange={(e) => handleDiets(e)}>
        {/* Dietas */}
        <option value="none" id="selectDiet" defaultValue disabled>
          Select Diet
        </option>
        <option value="All"> All diets</option>
        <option value="gluten free"> Gluten free</option>
        <option value="dairy free"> Dairy free</option>
        <option value="paleolithic"> Paleolithic</option>
        <option value="ketogenic"> Ketogenic</option>
        <option value="lacto ovo vegetarian"> Lacto ovo vegetarian</option>
        <option value="vegan"> Vegan</option>
        <option value="pescatarian"> Pescatarian</option>
        <option value="primal"> Primal</option>
        <option value="fodmap friendly"> Fodmap friendly</option>
        <option value="whole 30"> Whole 30</option>
      </select>
      <select onChange={(e) => handleSort(e)}>
        {/*   A-Z */}
        <option value="none" id="selectName" defaultValue disabled>
          Select Order
        </option>
        <option value="desc">Z to A</option>
        <option value="asc">A to Z</option>
      </select>
      {/* Puntaje */}
      <select id="score" onChange={(e) => handleScore(e)}>
        <option value="none" id="selectScore" defaultValue disabled>
          Select Score
        </option>
        <option value="asc"> Low score </option>
        <option value="desc"> High score </option>
      </select>
    </div>
  );
}
