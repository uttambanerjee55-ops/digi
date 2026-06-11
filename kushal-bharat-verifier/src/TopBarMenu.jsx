import React from 'react';

const TopBarMenu = () => {
  return (
    <div className="top-bar-menu">
      <ul className="top-menu-list">
        <li className="top-menu-item" translate="">
          <a
            href="https://sdms.symphonysummit.com/"
            target="_blank"
            rel="noopener"
            className="no-style-on-a"
          >
            <span>
              <img style={{ verticalAlign: 'middle', padding: '0 5px' }} src="/helpline.png" alt="" />
            </span>
            Technical Support
          </a>
        </li>
        <li routerlink="https://admin.skillindiadigital.gov.in/login" className="top-menu-item login" translate="" tabIndex={0}>
          LOGIN
        </li>
        <li routerlink="https://admin.skillindiadigital.gov.in/direct-registration" className="top-menu-item" translate="" tabIndex={0}>
          Register
        </li>
      </ul>
    </div>
  );
};

export default TopBarMenu;
