// import { GetRecipes } from "../../../helpers/GetRecipes";
import { GetRecipesStatic } from "../../../helpers/GetRecipesStatic";
import Days from "../../../helpers/Days.json";
import "./Calendar.css";

export const Calendar = () => {
  // const recipes = GetRecipes() // Fetch recipes from local DB or online
  const recipes = GetRecipesStatic(); // Fetch recipes static

  const days = Days;
  return (
    <section className="calendar">
      <h1>Calendario semanal</h1>

      {/* Map for render days to week */}
      {days.map((day, index) => (
        <aside key={index} className="day">
          <h2>{day}</h2>

          <div className="typeFood">
            {/* Map for render recipes */}
            {recipes.map(
              ({ id, title, category, dayWeek, photo }) =>
                dayWeek === day && (
                  <article key={id}>
                    <h3>{category}</h3>
                    <h4>{title}</h4>
                    <img src={photo} alt={"Foto de la comida: " + title} />
                  </article>
                )
            )}
          </div>
        </aside>
      ))}
    </section>
  );
};
