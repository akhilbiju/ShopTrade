import './Header.scss';
import { useState } from 'react';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import user from '../../images/user.png';
import cart from '../../images/cart.png';
import SideNav from '../sidenav/SideNav';
import { NAV_LINKS } from '../../constants/App';

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
  return (
    <>
      <header>
        <div className="logo">
          <div onClick={() => setMenuState(true)} className="hamburger">
            {[1, 2, 3].map((data) => (
              <div key={data}></div>
            ))}
          </div>
          <img src={logo} alt="logo not available"></img>
        </div>
        <div className="navlinks">
          {NAV_LINKS.map((route) => (
            <span key={route.path} className="navItem">
              {route.name}
            </span>
          ))}
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
