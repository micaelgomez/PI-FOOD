import "./card.css";
import React from "react";
import { Link } from "react-router-dom";

// [x] Área donde se verá el listado de recetas. Deberá mostrar su:
// [x]    Imagen
// [x]    Nombre
// [x]   Tipo de dieta (vegetariano, vegano, apto celíaco, etc)

export default function Card({ image, name, diets, id }) {
  return (
    <div className="card">
      <Link to={`home/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt="img not found" />

        <div className="diets-container">
          <h4> Diets: </h4>
          {diets.map((element) => {
            return (
              <h5 key={element}> {element.name ? element.name : element} </h5>
            );
          })}
        </div>
      </Link>
    </div>
  );
}
