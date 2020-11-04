import './Header.scss';
import Logo from '../../images/logo.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo not available"></img>
      </div>
      <div className="navlinks">links</div>
      <div className="controls">controls</div>
    </header>
  );
}

export default Header;
