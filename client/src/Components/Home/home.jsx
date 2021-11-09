import "./home.css";

import React from "react";
import { useState, useEffect } from "react"; // -->Hooks
import { useDispatch, useSelector } from "react-redux"; //--> mapStatetoProps, dispatch
import { getAllRecipes, getDiets } from "../../Dispatch/action"; //-->action

import Card from "../Card/card"; //->componente (imagen-nombre)
import Filtered from "../Filtered/filtered"; //->filtros
import Paginate from "../Paginate/paginate"; //-->Paginate
import SearchBar from "../SearchBar/searchBar"; //-->By Query

//-----------------------------------------------CONSIGNA--------------------------------------------------
// [ok] Input de búsqueda para encontrar recetas por nombre
// [ok]Área donde se verá el listado de recetas. Deberá mostrar su:
// [ok]Imagen
// [ok]Nombre
// [ok]Tipo de dieta (vegetariano, vegano, apto celíaco, etc)

// [ok] Botones/Opciones para filtrar por por tipo de dieta
// [ok] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético
// [ok] Botones/Opciones para ordenar por puntuación
// [ok] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.

export default function Home() {
  //HOOKS PARA TRAER ESTADO Y DESPACHAR
  const dispatch = useDispatch(); //-->dispatch(accion)
  const allRecipes = useSelector((state) => state.recipes); //-->allRecipes = state.recipes
  
  //Estados-Paginate
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //--> Paginas --> 1°
  const [recipesPerPage] = useState(9); //-->Recetas por pagina --> 9

  const indexOfLastRecipe = currentPage * recipesPerPage; //-->Ultima receta 9°
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //Primera Receta 0
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  ); //-->Recetas a mostar -->
  //1° -----> 0 - 8
  //2° -----> 9 - 17

  //Setea el current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Permite el funcionamente de as-des
  const setOrden1 = (ordenado) => {
    setOrden(ordenado);
  };

  //didMount o didUpdate -->dispatch(accion)
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  //Renderiza
  return (
    <div>
      <div className="foto">
        {/* <div className="titulos">
        <h1> Our Recipes </h1>
      </div> */}

        <SearchBar />

        <div>
          <Filtered paginate={paginate} setOrden1={setOrden1} />
        </div>
      </div>
      <Paginate
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes}
        paginate={paginate}
      />

      <div className="cards">
        {currentRecipes &&
          currentRecipes.map((element) => {
            return (
              <Card
                key={element.id}
                id={element.id}
                name={element.name}
                image={element.image}
                diets={element.diets}
              />
            );
          })}
      </div>
    </div>
  );
}
