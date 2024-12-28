import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <div className="row">

          <img src={logo} className='logo_svg' alt="" />
          </div>
        </nav>
    );
}

export default Nav;
