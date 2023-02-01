import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ paths }) => {
  return (
    <nav>
      <ul className='hidden lg:flex gap-x-11 items-center'>
        {paths.map((path, i) => (
          <li className=' my-7' key={i}>
            <NavLink
              to={path.path}
              className={({ isActive }) => (isActive ? 'font-bold' : null)}
            >
              {path.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
