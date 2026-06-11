import React from 'react';
import TopBarMenu from './TopBarMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="m_header" className="m-header">
      {/* Top row: top-bar-menu + tricolor */}
      <div className="row header-row">
        <TopBarMenu />

        <div className="tricolor">
          <div className="tricolor_items f_color"></div>
          <div className="tricolor_items s_color"></div>
          <div className="tricolor_items t_color"></div>
        </div>
      </div>

      {/* Top header section: logos + nav (desktop + mobile) */}
      <div className="m-header-top">
        <div className="m-container">

              {/* Desktop Logo 1: Koshal Bharat */}
              <div className="m-brand">
                
                    <Link to="/" className="m-brand__logo-wrapper">
                      <img
                        alt="Koshal Bharat"
                        src="https://admin.skillindiadigital.gov.in/assets/images/koshal-bharat.png"
                        className="logo-img"
                      />
                    </Link>
              </div>

              {/* Desktop Logo 2: Skill India */}
             <div className="m-brand m-brand--center">
                     <Link to="/" className="m-brand__logo-wrapper">
                      <img
                        alt="Skill India"
                        src="https://admin.skillindiadigital.gov.in/assets/images/skill-india-logo-home.png"
                        className="logo-img"
                      />
                    </Link>
                  
              </div>

              {/* Desktop Logo 3: Kushal Bharat */}
              <div className="m-brand">
                    <Link to="/" className="m-brand__logo-wrapper">
                      <img
                        alt="Kushal Bharat"
                        src="https://admin.skillindiadigital.gov.in/assets/images/kushal-bharat.png"
                        className="logo-img kushal-logo"
                      />
                    </Link>
              </div>
          </div>
      </div>

      {/* Bottom header: mobile menu overlay */}
      <div className="header-bg">
              <div
                className="m-header-menu"
              >
                <ul className="m-menu-nav">
                  <li aria-haspopup="true" className="m-menu__item">
                    <Link to="/" className="m-menu__link">
                      <span className="m-menu__link-text">HOME</span>
                    </Link>
                  </li>
                  {/* Add more menu items here later */}
                </ul>
              </div>
      </div>
    </header>
  );
};

export default Header;
