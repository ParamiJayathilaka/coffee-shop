import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import {FaStream} from 'react-icons/fa';
import "./header.css";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    }else{
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);
  }, [])



  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className='nav container'>
        <Link to='/' onClick ={scrollTop} className='nav__logo'>
          <img src={logo} alt="Logo" className="nav__logo__img" />
        </Link>
        <div className='nav__menu'>
          <ul className='nav__list'>
            {links.map((link, index) => (
              <li className='nav__item' key={index}>
                <Link
                  spy={true} 
                  smooth={true} 
                  offset={-60} 
                  hashSpy={true}
                  duration={500} 
                  to={link.path} 
                  className='nav__link'>{link.name}</Link>
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
