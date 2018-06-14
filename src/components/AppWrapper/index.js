import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Navbar } from 'react-materialize';

const App = ({children}) => {
  return (
    <div>
      <Navbar brand='Lunchplace' right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem>About Us</NavItem>
        </Navbar>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
