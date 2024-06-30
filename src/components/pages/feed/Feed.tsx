import { NavLink } from "react-router-dom";
import { ListRecipes } from "../../../data/ListRecipes";
import "./Feed.css";

export const Feed = () => {
  const showList = ListRecipes();

  return (
    <section>
      {showList.map(({ title, photo }, index) => (
        <article key={index}>
          <img src={photo.url} alt={photo.alt} />
          <div>
            <h2>{title}</h2>
            <NavLink to="#">Ver mas...</NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
