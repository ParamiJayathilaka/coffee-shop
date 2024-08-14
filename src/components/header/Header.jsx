import React from 'react';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import {FaStream} from 'react-icons/fa';
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt="Logo" className="nav__logo__img" />
        </a>
        <div className='nav__menu'>
          <ul className='nav__list'>
            {links.map((link, index) => (
              <li className='nav__item' key={index}>
                <a href={link.path} className='nav__link'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__togger'>
            <FaStream/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
