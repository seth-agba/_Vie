import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';

import { links } from '../data';
import Logo from '../images/3.png';
export default function NavBar() {
  return (
    <nav>
      <div> <img src={Logo} /></div>
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
      </div>
    </nav>
  );
}
