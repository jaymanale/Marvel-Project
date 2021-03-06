import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let navbar = [
    { to: '/characters', title: 'Characters' },
    { to: '/comics', title: 'Comics' },
    { to: '/events', title: 'Events' },
    { to: '/series', title: 'Series' },
    { to: '/creators', title: 'Creators' },
  ];

  //{ to: '/stories', title: 'Stories' },

  return (
    <React.Fragment>
      <div className="container text-center">
        <div
          className="text-uppercase font-weight-bolder mb-1"
          style={{ fontSize: '30px' }}
        >
          <Link className="textColorGradiant display-4" to="/">
            Marvel
          </Link>
        </div>
        <div className="row">
          {navbar.map((nav) => (
            <span key={nav.to} className="mx-auto">
              <Link className="textColorGradiant" to={nav.to}>
                {nav.title}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
