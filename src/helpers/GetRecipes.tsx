import { useState, useEffect } from "react";

export const GetRecipes = () => {
  // 1. Estado para mostrar las recetas
  const [recipes, setRecipes] = useState([]);

  // 2. Efecto para montar las recetas en el componente cuando sea cargado
  useEffect(() => {
    getRecipes();
  }, []);

  // 3. Función asincrona para obtener datos de la DB.
  const getRecipes = async () => {
    try {
      const petition = await fetch("http://localhost:3000/api/employees");

      // 3.1 Conversión de los datos a formato JSON
      const data = await petition.json();

      // 3.2 Seteo e empuje de los datos al estado recipes
      setRecipes(data);
    } catch (err) {
      /* ----- Extra: esto lo puedo mejorar para responder a los errores ------ */
      console.log(err);
    }
  };

  return { recipes };
};
