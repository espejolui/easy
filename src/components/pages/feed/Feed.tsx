import { NavLink } from "react-router-dom";
import ListRecipes from "../../../data/ListRecipes.json";
import { ArrowIcon } from "../../../helpers/ArrowIcon";
import "./Feed.css";

export const Feed = () => {
  const showList = ListRecipes;

  return (
    <section className="feed">
      {showList.map(({ id, title, photo, category }) => (
        <article key={id}>
          <img src={photo} alt={photo} />

          <div>
            <h2>{title}</h2>
            <span>{category}</span>
            <NavLink to="#">
              Receta <ArrowIcon />
            </NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
