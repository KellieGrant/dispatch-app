import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="new-trip">
          <Link to="/">New Trip</Link>
      </div>

      <ul>
        <li>
          <Link to="/garage">Garage</Link>
        </li>
        <li>
          <Link to="/drivers">Drivers</Link>
        </li>
      </ul>

      <div className="cancel-trip">
          <Link to="/cancel-trip">Cancel Trip</Link>
      </div>
    </nav>
  );
};

export default Nav;
