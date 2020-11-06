import { NavLink } from 'react-router-dom';

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
        <img src={Cancel} onClick={closeMenu} alt="close"></img>
      </div>
      <nav>
        {NAV_LINKS.map((route) => (
          <NavLink
            to={route.path}
            key={route.path}
            className="navItem"
            activeClassName="active"
            onClick={closeMenu}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SideNav;
