import React from 'react';
import { GiAstronautHelmet } from 'react-icons/gi';
import './Navbar.scss';

function Header(props) {
  const { menu, setMenu } = props;
  return (
    <header className="Header">
      <div className="Header__logo">
        <GiAstronautHelmet className="Header__icon" />
        <p className="Header__logo--title">
          &lt;<span class="logo__first">Borofsky</span>
          <span class="logo__second">Dev</span> /&gt;
        </p>
      </div>
      <div className="Header__button">
        <button
          className={`menu__trigger ${menu ? 'menu__close' : ''}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
