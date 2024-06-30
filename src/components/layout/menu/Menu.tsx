import { NavLink } from "react-router-dom";
import { RoutesMain } from "../../../routes/RoutesMain";
import "./Menu.css";
import { Search } from "../search/Search";

export const Menu = () => {
  const routes = RoutesMain().props.children.props.children;

  return (
    <nav>
      <div>
        <img src="logo.svg" alt="Logo de easyfood" />
        <ul>
          {routes.map(
            (route: { props: { path: string } }) =>
              route.props.path !== "/" &&
              route.props.path !== "*" && (
                <li key={route.props.path}>
                  <NavLink to={route.props.path}>
                    {route.props.path.split("/")}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
      <Search />
    </nav>
  );
};
