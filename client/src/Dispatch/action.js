import axios from "axios";
import {
  GET_ALL_RECIPES,
  ORDER_SCORE,
  ORDER_DIETS,
  ORDER_BY_NAME,
  GET_RECIPES_BY_NAME,
  GET_DIETS,
  GET_RECIPE_DETAIL,
} from "./types";

export function getAllRecipes() {
  return function (dispatch) {
    return axios
      .get("/recipes")
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: GET_ALL_RECIPES, payload: json });
      })
      .catch((err) => {
        dispatch({ type: GET_ALL_RECIPES, payload: err });
      });
  };
}

//Receta por nombre
export function getRecipeByName(name) {
  try {
    return async function (dispatch) {
      var json = await axios.get(`/recipes?name=${name}`);

      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: json.data,
      });
    };
  } catch (error) {
    return error;
  }
}

//Receta por id
export function getRecipeDetail(id) {
  try {
    return async function (dispatch) {
      var json = await axios.get(`/recipes/${id}`);

      return dispatch({
        type: GET_RECIPE_DETAIL,
        payload: json.data,
      });
    };
  } catch (error) {
    return error;
  }
}
//Post nueva receta
export async function postNewRecipe(payload) {
  try {
    await axios.post("/recipes", payload);
    return true;
  } catch ({ message: error }) {
    return false;
  }
}

//Todas las dietas
export function getDiets() {
  return async function (dispatch) {
    var json = await axios.get("/types");

    return dispatch({
      type: GET_DIETS,
      payload: json.data,
    });
  };
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
