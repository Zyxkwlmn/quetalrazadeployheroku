import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo.jpg';
import usuario from '@icons/usuario.png';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/_OrderResume';

const Header = () => {

    return (
        <nav>
          <img src={menu} alt="menu" className="menu"/>

          <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo"/>

            <ul>
              <li>
                <a href="/">Clientes</a>
              </li>
              <li>
                <a href="/ListAllPet">Mascotas</a>
              </li>
              <li>
                <a href="/ListAppo">Citas</a>
              </li>
              <li>
                <a href="">Historial</a>
              </li>
              <li>
                <a href="">Inventario</a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <ul>
              <li className="navbar-email" >username@example.com</li>
              <li className="navbar-shopping-cart">
              <img src={usuario} alt="usuario" className="usuario"/></li>
             </ul> 
          </div>
      </nav>
    );
}

export default Header;