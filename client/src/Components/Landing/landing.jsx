import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";

// [ ] Alguna imagen de fondo representativa al proyecto
// [x] Botón para ingresar al home (Ruta principal)

export default function Landing() {
  return (
    <div className="principal">
      <div>
        <div className="title">
          <h1> Premium And </h1>
          <h1> Authentic Recipes </h1>
          <Link to="/home">
            <div className="btn">
              <span>Explore Recipes</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
