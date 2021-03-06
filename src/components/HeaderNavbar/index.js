// Dependencies
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Styles
import './styles.scss';

function HeaderNavbar() {
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
    text: 'Repos',
    redirect: 'repos'
  }];

  return (
    <header className="header">
      <Link className="header__link" to="/home">
        <h1 className="header__logo">GitHub Client</h1>
      </Link>

      <nav>
        <ul className="header__menu">
          {navigation.map(item => (
            <li className="header__menu-item" key={`nav${item.text}`}>
              <NavLink
                activeClassName="header__menu-item--active"
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
