import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { links } from '../data';
export default function Layout() {
  return (
    <nav>
      <div>
        <ul>
          {links.map(({ path, name }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </div>
    </nav>
  );
}
