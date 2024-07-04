import { NavLink } from "react-router-dom";
import ListRecipes from "../../../data/ListRecipes.json";
import "./Feed.css";

export const Feed = () => {
  const showList = ListRecipes;

  return (
    <section className="feed">
      {showList.map(({ title, photo }, index) => (
        <article key={index}>
          <img src={photo} alt={photo} />
          <div>
            <h2>{title}</h2>
            <NavLink to="#">Ver mas...</NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
