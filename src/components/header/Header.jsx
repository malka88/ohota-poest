import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { search } from './imports';
import './header.css';

const Header = () => {
  return (
    <Router>
    <header>
      <nav>
        <Link className="nav__logo" to="/">ОХОТА ПОЕСТЬ</Link>
        <div className="nav__menu">
          <div>
            <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link" to="/recipes">
                    Рецепты
                  </Link>
                </li>
      
                <li className="nav__item">
                  <Link className="nav__link" to="/about">
                    О сайте
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <form className="nav__search__container" action="" method="post">
              <input className="nav__search__input" type="search" placeholder="Поиск по сайту" name="search"/>
              <button className="nav__search__button" type="submit"><img className="search__img" src={search} /></button>
            </form>
          </div>
        </div>
        <button className="nav__button">Поделиться рецептом</button>
      </nav>
    </header>
    </Router>
  )
}

export default Header;