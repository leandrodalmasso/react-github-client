// Dependencies
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Styles
import './styles.scss';

function HeaderNavbar() {
  const navActiveClassName = 'header__menu__item--active';
  const navigation = [{
    text: 'Home',
    redirect: '/home',
  },{
    text: 'Users',
    redirect: '/users',
  },{
    text: 'Popular',
    redirect: '/popular',
  },{
    text: 'Search',
    redirect: 'search'
  }];

  return (
    <header className="header">
      <Link className="header__link" to="/home">
        <h1 className="header__logo">GitHub Client</h1>
      </Link>

      <nav>
        <ul className="header__menu">
          {navigation.map(item => (
            <li className="header__menu__item" key={`nav${item.text}`}>
              <NavLink
                activeClassName={navActiveClassName}
                className="header__link"
                to={item.redirect}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNavbar;
