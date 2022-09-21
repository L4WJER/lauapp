import CartWidget from '../CartWidget';
import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
  <div className='container-fluid'>
    <NavLink className='navbar-brand' href='#'>Navbar</NavLink>
    
    
    <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink className='nav-link active' aria-current='page' to='/'>MiMarca</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/categoria/films'>Peliculas</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/categoria'>Series</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/cart'><CartWidget /></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;