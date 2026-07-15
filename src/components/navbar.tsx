import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Articles
      </NavLink>

      <NavLink
        to="/stock"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Suivi du stock
      </NavLink>

      <NavLink
        to="/vente"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Vente
      </NavLink>

      <NavLink
        to="/factures"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Factures
      </NavLink>

      <NavLink
        to="/recettes"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Recettes
      </NavLink>

    </nav>
  );
}

export default Navbar;