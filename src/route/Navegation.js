import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navegacion">
        <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
        <NavLink to={'/productos'} activeClassName="activo">productos</NavLink>

        <NavLink to={'/contacto'} activeClassName="activo">contacto</NavLink>

      </nav>
     );
  }
}
 
export default Navigation;