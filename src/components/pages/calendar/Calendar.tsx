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
      <h1>Calendario</h1>

      {/* Map for show days to week */}
      {days.map((day, index) => (
        <aside key={index} className="day">
          <h2>{day}</h2>

          <div className="foodType">
            <h3>Desayuno</h3>

            {recipes.map(({ id, title, category, dayWeek, photo }) =>
              category === "desayuno" && dayWeek === day ? (
                <article key={id}>
                  <img src={photo} alt={"Foto de la comida: " + title} />
                  <h3>{title}</h3>
                </article>
              ) : null
            )}
          </div>

          <div className="foodType">
            <h3>Almuerzo</h3>

            {recipes.map(({ id, title, category, dayWeek, photo }) =>
              category === "almuerzo" && dayWeek === day ? (
                <article key={id}>
                  <img src={photo} alt={"Foto de la comida: " + title} />
                  <h3>{title}</h3>
                </article>
              ) : null
            )}
          </div>

          <div className="foodType">
            <h3>Cena</h3>

            {recipes.map(({ id, title, category, dayWeek, photo }) =>
              category === "cena" && dayWeek === day ? (
                <article key={id}>
                  <img src={photo} alt={"Foto de la comida: " + title} />
                  <h3>{title}</h3>
                </article>
              ) : null
            )}
          </div>
        </aside>
      ))}
    </section>
  );
};
