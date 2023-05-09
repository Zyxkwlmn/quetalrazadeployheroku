import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo.jpg';
import usuario from '@icons/usuario.png';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/_OrderResume';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);  

    const handleToggle = () => {
      setToggle(!toggle);
    }

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
                <a href="/">Mascotas</a>
              </li>
              <li>
                <a href="/">Citas</a>
              </li>
              <li>
                <a href="/">HistorialClínico</a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <ul>
              <li className="navbar-email" onClick={handleToggle}>username@example.com</li>
              <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
              <img src={usuario} alt="usuario" className="usuario"/></li>
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null} 
            </ul>
          </div>
          {toggle && <Menu />}
          {toggleOrders && <MyOrder />}
      </nav>
    );
}

export default Header;