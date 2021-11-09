const { Router } = require("express");
const router = Router();
const { Recipe, Diet } = require("../../db");
const { getApyDbRecipe, postRecipe, getRecipesById } = require("./store");

//  GET
//       -->/recipes?name="..." ->Listado de nombre de Recepies
//       -->/recipes            ->Lisado de todas las Recepies
router.get("/", async (req, res, next) => {
  let name = req.query.name;

  try {
    let totalRecipes = await getApyDbRecipe();

    if (name) {
      //Si hay nombre-->
      //filtralo en minuscula por cada elemento.
      let recipesName = await totalRecipes.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      //Si encontro algo -->envialo -->Si no "La receta no existe"
      recipesName.length
        ? res.status(200).send(recipesName)
        : res.status(404).send("La receta no existe");
    } else {
      //Envia todas las recetas
      res.status(200).send(totalRecipes);
    }
  } catch (error) {
    next(error);
  }
});

//  GET
//      --> recipes/{idReceta}:
//          Obtener el detalle de una receta en particular
//          Debe traer solo los datos pedidos en la ruta de detalle de receta
//          --> imagen,
//          --> nombre,
//          --> tipo de plato
//          --> tipo de dieta  !IMPORTANTE
//          --> Resumen del plato
//          --> Puntuación
//          --> Nivel de "comida saludable"
//          --> Paso a paso

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  console.log(id);
  try {
    if (id) {
      const idMatch = await getRecipesById(id);
      console.log(idMatch);

      if (idMatch === "Recipe id is not found") {
        res.status(404).send("Recipe id is not found");
      } else {
        res.status(200).json(idMatch);
      }
    }
  } catch (error) {
    next(error);
  }
});

// POST
//      -->/recipes  Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//                    Crea una receta en la base de datos
//                     -> Nombre
//                     -> Resumen del plato
//                     -> Puntuación
//                     -> Nivel de "comida saludable"
//                     -> Paso a paso
//                     [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
//                     [ ] Botón/Opción para crear una nueva receta

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.summary) {
    res.status(404).send("Name and Summary are required");
  }

  try {
    let recipe = await postRecipe(req.body);
    res.status(200).send(recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
