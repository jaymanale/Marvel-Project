import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Base = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div> {children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Base;
