import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../../../helpers/ArrowIcon";
import { GetRecipes } from "../../../helpers/GetRecipes";
import "./Feed.css";

export const Feed = () => {
  const {recipes} = GetRecipes();

  return (
    <section className="feed">
      {recipes.map(({ id, title, photo, type_food }) => (
        <article key={id}>
          <img src={photo} alt={title} />

          <div>
            <h2>{title}</h2>
            <span>{type_food}</span>
            <NavLink to="#">
              Receta <ArrowIcon />
            </NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
