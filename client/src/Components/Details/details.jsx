import "./detail.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../../Dispatch/action";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  //Saco el numero de id de params
  let { id } = useParams();
  console.log(id);
  console.log(detail);

  //mount o did update -->db-->le paso id-->Seteo la respuesta en my estado React
  useEffect(() => {
    dispatch(getRecipeDetail(id));

    //clean up
    // dispatch(getRecipeDetail(null));
  }, [dispatch]);

  //   [ ok] Los campos mostrados en la ruta principal para cada receta (imagen , nombre , tipo de plato  y tipo de dieta ok)
  //   - [ ] Resumen del plato
  //   - [] Puntuación ok
  //   - [ ] Nivel de "comida saludable" ok
  //   - [ ok ] Paso a paso

  const steps = detail[0]?.steps;
  // console.log(steps);
  const steps1 = steps?.steps;
  // console.log(steps1);

  const diets = detail[0] ? detail[0].diets : detail.diets;
  console.log(diets);

  return (
    <div className="detail-background">
      <div className="home">
        <Link to="/home">
          <button className="btn">Home </button>
        </Link>
      </div>

      <div className="borde">
        {detail && (
          <div>
            <div className="detalle">
              <h2> {detail[0] ? detail[0].name : detail.name}</h2>
              <img src={detail[0]?.image} />
              <h3>
                Dish Types:{" "}
                {detail[0] ? detail[0]?.dishTypes : "Without dish types"}
              </h3>
              <h4>
                Diets: {detail[0]?.diets}
                {diets && diets.map((diet) => <li key = {diet.id}> {diet.name} </li>)}
              </h4>
              <h5>
                Summary: {detail[0] ? detail[0]?.summary : detail.summary}
              </h5>
              <h4>Score: {detail[0] ? detail[0]?.score : detail.score}</h4>
              <h4>health: {detail[0] ? detail[0]?.health : detail.health}</h4>
            </div>

            <div className="steps">
              {steps1 &&
                steps1.map((step) => (
                  <h4>
                    {step.number}: {step.step}
                  </h4>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
