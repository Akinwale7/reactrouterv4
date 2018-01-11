import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: 'red'}}>Home</NavLink></li>
      <li><NavLink to="/about" activeClassName='testing'>About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;