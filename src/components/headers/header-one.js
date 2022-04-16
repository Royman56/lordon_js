import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartContainer from "../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Dropdown from '../headers/Dropdown';
//import logo from "../../assets/images/icon/logo1.png";
import logo from "../../assets/images/icon/logo1.png";

const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const [t, i18n] = useTranslation("global");
  const router = useRouter();

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    if (router !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        {/*Top Header Component*/}
        {noTopBar ? "" : <TopBarDark topClass={topClass} />}

            <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={`/assets/images/icon/logo.png`} alt=""  className="phone" width="100"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <img src={logo} alt="" className="phone" width="100"/>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-items'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              {t("header-one.menu1")}
            </Link>
          </li>
          <li
            className='nav-items'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link
              to='/viewfullcategory/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              {t("header-one.menu2")} <i className='fa fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-items'>
            <Link
              to='/business/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              {t("header-one.menu3")}
            </Link>
          </li>
          <li className='nav-items'>
            <Link
              to='/contact/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              {t("header-one.menu4")}
            </Link>
          </li>
          <li className='nav-items'>
            <Link
              to='/login/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>
            
      </header>

    </div>
  );
};

export default HeaderOne;
