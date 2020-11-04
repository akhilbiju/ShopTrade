import './Header.scss';
import logo from '../../images/logo.png';
import search from '../../images/search.png';
import user from '../../images/user.png';
import cart from '../../images/cart.png';

function Header() {
  const cartTotal = 1;
  const inputStyle = {
    background: 'url(' + search + ') 95% no-repeat',
    backgroundSize: '15px',
  };
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo not available"></img>
      </div>
      <div className="navlinks">
        <span className="navItem">Shop</span>
        <span className="navItem">About Us</span>
        <span className="navItem">Our Stores</span>
        <span className="navItem">Contact Us</span>
      </div>
      <div className="controls">
        <input
          className="searchbox-large"
          type="text"
          style={inputStyle}
        ></input>
        {/* <img src={search} alt="not available"></img> */}
        <img src={user} alt="not available"></img>
        <img src={cart} alt="not available"></img>
        {cartTotal > 0 && <span className="cartcount">{cartTotal}</span>}
      </div>
    </header>
  );
}

export default Header;
