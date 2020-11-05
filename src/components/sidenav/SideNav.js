import './SideNav.scss';
import Cancel from '../../images/cancel.png';
import { NAV_LINKS } from '../../constants/App';

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
        {NAV_LINKS.map((route) => (
          <div key={route.path} className="navItem" onClick={closeMenu}>
            {route.name}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default SideNav;
