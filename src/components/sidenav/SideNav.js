import './SideNav.scss';
import Cancel from '../../images/cancel.png';

function SideNav(props) {
  const { opened, menuevent } = props;
  const closeMenu = () => {
    menuevent(false);
  };
  return (
    <div className={'sidenav-container ' + (opened ? 'active' : 'hidden')}>
      <div className="header">
        <img src={Cancel} onClick={closeMenu} alt="logo not available"></img>
      </div>
      <nav>
        <div className="navItem">Shop</div>
        <div className="navItem">About Us</div>
        <div className="navItem">Our Stores</div>
        <div className="navItem">Contact Us</div>
      </nav>
    </div>
  );
}

export default SideNav;
