import listRecipes from "../data/ListRecipes.json";

export const GetRecipesStatic = () => {
  const recipes = listRecipes;

  return recipes;
};
