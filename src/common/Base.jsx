import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Base = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <hr className="mt-0 mb-0" />
      <div className="m-3"> {children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Base;
