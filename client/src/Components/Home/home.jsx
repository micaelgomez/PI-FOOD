import "./home.css";

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets } from "../../Dispatch/action";

import Card from "../Card/card";
import Filtered from "../Filtered/filtered";
import Paginate from "../Paginate/paginate";
import SearchBar from "../SearchBar/searchBar";
import Footer from "../Footer/footer";

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
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  //Estados-Paginate
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  //Setea el current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Permite el funcionamente de as-des
  const setOrden1 = (ordenado) => {
    setOrden(ordenado);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  //Renderiza
  return (
    <div>
      <div className="foto">
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

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
