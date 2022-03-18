import {
  GET_ALL_RECIPES,
  ORDER_SCORE,
  ORDER_DIETS,
  ORDER_BY_NAME,
  GET_RECIPES_BY_NAME,
  GET_DIETS,
  POST_RECIPES,
  GET_RECIPE_DETAIL,
} from "./types";

const initialState = {
  recipes: [], // -->Rendereiza.
  allRecipes: [], //-->Back up.
  diets: [], //-->Dietas.
  detail: [], //-->id.
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
        allRecipes: payload,
      };

    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        recipes: payload,
      };

    case GET_RECIPE_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case POST_RECIPES:
      return {
        ...state,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case ORDER_SCORE:
      let orderScore = state.recipes;

      let recipesByScore =
        payload === "asc"
          ? orderScore.sort(function (a, b) {
              return a.score - b.score;
            })
          : orderScore.sort(function (a, b) {
              return b.score - a.score;
            });

      return {
        ...state,
        recipes: recipesByScore,
      };

    case ORDER_DIETS:
      const allRecipes1 = state.allRecipes; //back-up

      let dietsApi = //guardo en una variable el resultado de
        payload === "All" //-->Si el payload es all -->copia del back up
          ? allRecipes1 // copia del back up
          : allRecipes1.filter((el) => el.diets.includes(payload)); //dieta que matchea

      // let dietsDb = allRecipes1.filter((el) => el.diets[0]?.name === payload);

      let dietsDb = allRecipes1.filter(
        (el) => el.dietString && el.dietString.includes(payload)
      );
      console.log(allRecipes1);

      let dietsFiltered = dietsApi.concat(dietsDb);
        
      return {
        ...state,
        recipes: dietsFiltered, // todas las recetas O receta que contenga dieta correcta.
      };

    case ORDER_BY_NAME:
      let recipesByName =
        payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        recipes: recipesByName,
      };

    default:
      return state;
  }
}

export default rootReducer;
