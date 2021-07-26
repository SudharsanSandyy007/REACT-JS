import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/items" className="nav__link">
        Items
      </Link>
      <Link to="/users" className="nav__link">
        Users
      </Link>
    </div>
  );
}

export default NavBar;
