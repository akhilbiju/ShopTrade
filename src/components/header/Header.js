import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import user from '../../images/user.png';
import cart from '../../images/cart.png';
import SideNav from '../sidenav/SideNav';
import { NAV_LINKS } from '../../constants/App';
import { StoreContext } from '../../contexts/TodoContext';

function Header() {
  const { storeState } = React.useContext(StoreContext);
  const [menuState, setMenuState] = useState(false);
  const inputStyle = {
    background: 'url(' + search + ') 95% no-repeat',
    backgroundSize: '15px',
  };
  const handleMenuEvent = (value) => {
    setMenuState(value);
  };
  return (
    <>
      <header>
        <div className="logo">
          <div onClick={() => setMenuState(true)} className="hamburger">
            {[1, 2, 3].map((data) => (
              <div key={data}></div>
            ))}
          </div>
          <NavLink to="/">
            <img src={logo} alt="logo not available"></img>
          </NavLink>
        </div>
        <div className="navlinks">
          {NAV_LINKS.map((route) => (
            <NavLink
              to={route.path}
              activeClassName="active"
              key={route.path}
              className="navItem"
            >
              {route.name}
            </NavLink>
          ))}
        </div>
        <div className="controls">
          <input className="searchbox-large" style={inputStyle}></input>
          <img className="searchIcon" src={search} alt="not available"></img>
          <img src={user} alt="not available"></img>
          <NavLink to="/cart">
            <img src={cart} alt="not available"></img>
            {storeState.cartItems.totalItems > 0 && (
              <span className="cartcount">
                {storeState.cartItems.totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </header>
      <SideNav opened={menuState} menuevent={handleMenuEvent} />
    </>
  );
}

export default Header;
