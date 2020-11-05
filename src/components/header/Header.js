import './Header.scss';
import { useState } from 'react';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import user from '../../images/user.png';
import cart from '../../images/cart.png';
import SideNav from '../sidenav/SideNav';

function Header() {
  const [menuState, setMenuState] = useState(false);
  const cartTotal = 1;
  const inputStyle = {
    background: 'url(' + search + ') 95% no-repeat',
    backgroundSize: '15px',
  };
  const handleMenuEvent = (value) => {
    setMenuState(value);
  };
  const openMenu = () => {
    setMenuState(true);
  };

  return (
    <>
      <header>
        <div className="logo">
          <div onClick={openMenu} className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={logo} alt="logo not available"></img>
        </div>
        <div className="navlinks">
          <span className="navItem">Shop</span>
          <span className="navItem">About Us</span>
          <span className="navItem">Our Stores</span>
          <span className="navItem">Contact Us</span>
        </div>
        <div className="controls">
          <input className="searchbox-large" style={inputStyle}></input>
          <img className="searchIcon" src={search} alt="not available"></img>
          <img src={user} alt="not available"></img>
          <img src={cart} alt="not available"></img>
          {cartTotal > 0 && <span className="cartcount">{cartTotal}</span>}
        </div>
      </header>
      <SideNav opened={menuState} menuevent={handleMenuEvent} />
    </>
  );
}

export default Header;
