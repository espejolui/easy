//import { GetRecipes } from "../../../helpers/GetRecipes";
import ListRecipes from "../../../data/ListRecipes.json";
import Days from "../../../helpers/Days.json";
import "./Calendar.css";

export const Calendar = () => {
  /* --------- Código para hacer el fetch de las recetas de la DB local o en línea ------------ */
  // const recipes = GetRecipes()

  // Datos obtenidos de forma estática
  const recipes = ListRecipes; // Solo sería cambiar esto por los datos de la DB.
  console.log(recipes);
  const days = Days;
  return (
    <section className="calendar">
      <h1>Calendario</h1>

      {days.map((day, index) => (
        <div key={index} className="day">
          <h2>Este es el día: {day}</h2>

          <div className="foodType">
            Desayuno
            {recipes.map(({ id, title, category, dayWeek }) =>
              category === "desayuno" && dayWeek === day ? (
                <article key={id}>
                  <p></p>
                  <h3>{title}</h3>
                </article>
              ) : null
            )}
          </div>

          <div className="foodType">
            Almuerzo
            {recipes.map(({ id, title, category, dayWeek }) =>
              category === "almuerzo" && dayWeek === day ? (
                <article key={id}>
                  <p></p>
                  <h3>{title}</h3>
                </article>
              ) : null
            )}
          </div>

          <div className="foodType">
            Cena
            </div>
        </div>
      ))}
    </section>
  );
};
