import '../../styles/components/layout/Nav.css';

import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = props => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink
              activeClassName='activo'
              to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='activo'
              to='/nosotros'>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='activo'
              to='/novedades'>
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='activo'
              to='/contacto'>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
