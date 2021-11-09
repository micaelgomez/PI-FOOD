import rootReducer from "../Dispatch/reducer";

test("should return initial state", () => {
  expect(rootReducer(undefined, {})).toEqual({
    recipes: [], // -->RENDERIZA
    allRecipes: [], //Back up con toda la info.
    diets: [], //TODAS LAS DIETAS
    detail: [], //Detalle id
  });
});
