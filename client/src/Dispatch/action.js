import axios from "axios"; //-->llamadas async
import {
  GET_ALL_RECIPES,
  ORDER_SCORE,
  ORDER_DIETS,
  ORDER_BY_NAME,
  GET_RECIPES_BY_NAME,
  GET_DIETS,
  GET_RECIPE_DETAIL,
} from "./types";

//Todas las recetas
export function getAllRecipes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/recipes");

    return dispatch({
      type: GET_ALL_RECIPES,
      payload: json.data,
    });
  };
}

//Todas las dietas
export function getDiets() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/types");

    return dispatch({
      type: GET_DIETS,
      payload: json.data,
    });
  };
}

//Receta por nombre
export function getRecipeByName(name) {
  try {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: json.data,
      });
    };
  } catch (error) {
    return error;
  }
}

//Filtrado por puntaje
export function filterByScore(payload) {
  console.log(payload);
  return {
    type: ORDER_SCORE,
    payload,
  };
}

//Filtado por dieta
export function filteredByDiets(payload) {
  console.log(payload);
  return {
    type: ORDER_DIETS,
    payload,
  };
}

//Ordenado A-Z / Z-A
export function orderByName(payload) {
  console.log(payload);
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

//Post nueva receta
export async function postNewRecipe(payload) {
  try {
    await axios.post("http://localhost:3001/recipes", payload);
    return true;
  } catch ({ message: error }) {
    return false;
  }
}

//detalle receta
export function getRecipeDetail(id) {
  try {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/recipes/${id}`);

      return dispatch({
        type: GET_RECIPE_DETAIL,
        payload: json.data,
      });
    };
  } catch (error) {
    return error;
  }
}
