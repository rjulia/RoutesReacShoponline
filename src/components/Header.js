import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = (props) => {
     return (
       <header>
         <Link to={'/'}>
           <img src="/img/logo.png" alt="" />

         </Link>
       </header>
     )
}
 
export default Header;
