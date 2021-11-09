import React from "react";
import "./paginate.css";

export default function Paginate({ recipesPerPage, allRecipes, paginate }) {
 
  const pageNumber = []; // = allRecipes/ recipesPerPage

  for (let i = 1; i <= Math.ceil(allRecipes.length / recipesPerPage); i++) {
    pageNumber.push(i) 
  }

  //Renderiza
  return (
    <nav>
      <ul className="paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <li className="li" key={number}>
              {/* <a onClick={() => paginate(number)}> {number} </a> */}
              <button onClick={() => paginate(number)}      > {number} </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
