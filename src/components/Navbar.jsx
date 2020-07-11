import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" navbar navbar navbar-light bg-primary">
      <ul className="nav">
        <li className="nav item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav item">
          <Link className="nav-link text-white" to="/characters">
            Characters
          </Link>
        </li>

        <li className="nav item">
          <Link className="nav-link text-white" to="/events">
            Events
          </Link>
        </li>

        <li className="nav item">
          <Link className="nav-link text-white" to="/series">
            Series
          </Link>
        </li>

        <li className="nav item text-white">
          <Link className="nav-link" to="/stories">
            Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
