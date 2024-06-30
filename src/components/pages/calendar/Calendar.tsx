import { useEffect, useState } from "react";
import "./Calendar.css";

export const Calendar = () => {

  // 1. Estado para mostrar las recetas
  const [recipes, setRecipes] = useState([]);

  // Efecto para montar las recetas en el componente cuando sea cargado
  useEffect(() => {
    getRecipes();
  }, [])


  const getRecipes = async () => {
    try {
      const petition = await fetch("http://localhost:3000/api/employees");
      // Obtengo solo los datos del array que hay en data y los paso a un json
      const data = await petition.json();
      console.log(data);
      // Luego los seteo en setRecipes
      setRecipes(data);

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <h1>Calendario</h1>
      <p>Prueba de calendario</p>
      {
        recipes.map(({ id, name, salary }) => (

          <div key={id}>

            <p><strong>{id}</strong>: Nombre de la receta: {name} - Costo de preparación: {salary}</p>

          </div>
        ))
      }
    </>
  );
};
