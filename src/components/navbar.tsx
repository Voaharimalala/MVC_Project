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
        to="/factures"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Paiement & Facture
      </NavLink>

      <NavLink
        to="/recettes"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Recettes
      </NavLink>
      <NavLink
        to="/recettes"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Historique
      </NavLink>
    </nav>
  );
}

export default Navbar;