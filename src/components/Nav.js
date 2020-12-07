import React from "react";

function Nav() {
  return (
    <nav>
      <div className="logo">My Dashboard</div>
      <ul className="nav-links">
        <div>Weather</div>
        <div>Todo List</div>
        <div>Movies</div>
        <div>About</div>
      </ul>
    </nav>
  );
}

export default Nav;
