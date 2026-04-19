import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/length"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Length
      </NavLink>
      <NavLink
        to="/weight"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Weight
      </NavLink>
      <NavLink
        to="/temperature"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Temperature
      </NavLink>
    </nav>
  );
};

export default Navbar;
