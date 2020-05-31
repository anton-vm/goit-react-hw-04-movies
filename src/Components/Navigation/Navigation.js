import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from './Navigation.module.css'


const Navbar = () => {    
  return (
    <nav className={style.navigation}>
      
      <ul className={style.list}>
        <li className={style.listItem}>
          <NavLink exact to="/" className="">
            Home
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;