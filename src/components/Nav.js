import React from "react";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <a href="/">My Dashboard</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/weather">Weather</a>
        </li>
        <li>
          <a href="/todolist">Todo List</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
