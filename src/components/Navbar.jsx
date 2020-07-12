import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="text-center text-white ">
        <p
          className="text-uppercase font-weight-bolder mb-1"
          style={{ fontSize: '30px' }}
        >
          Marvel
        </p>
        <p>
          <span className="mx-1">
            <Link className=" text-white " to="/characters">
              Characters
            </Link>
          </span>
          <span className="mx-1">
            <Link className="text-white" to="/comics">
              Comics
            </Link>
          </span>
          <span className="mx-1">
            <Link className=" text-white" to="/events">
              Events
            </Link>
          </span>
          <span className="mx-1">
            <Link className=" text-white" to="/series">
              Series
            </Link>
          </span>
          <span className="mx-1">
            <Link className=" text-white" to="/stories">
              Stories
            </Link>
          </span>
          <span className="mx-1">
            <Link className=" text-white" to="/creators">
              Creators
            </Link>
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
