import { NavLink } from "react-router-dom";
import ListRecipes from "../../../data/ListRecipes.json";
import arrowRight from "../../../assets/arrowRight.svg";
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

            <NavLink to="#">
              Receta <img src={arrowRight} />
            </NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
