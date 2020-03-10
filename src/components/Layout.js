import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import '../assets/style/main.scss';
import Header from '../components/Header'

const Layout = ({ children, isIndex }) => (
  <div>
    <div className="container">
      <div className="content">
        <Header isIndex={isIndex}/>
        <main>
          {children}
        </main>
      </div>
      {isIndex && <Navbar />}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
