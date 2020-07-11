import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" navbar navbar navbar-light bg-danger">
      <ul className="nav">
        <li className="nav item">
          <Link
            className="nav-link text-white text-uppercase font-weight-bolder"
            to="/"
          >
            Marvel
          </Link>
        </li>
        <li className="nav item">
          <Link className="nav-link text-white" to="/characters">
            Characters
          </Link>
        </li>
        <li className="nav item">
          <Link className="nav-link text-white" to="/comics">
            Comics
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

        <li className="nav item ">
          <Link className="nav-link text-white" to="/stories">
            Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
