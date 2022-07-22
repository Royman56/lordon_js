import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContainer from "../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Dropdown from "../headers/Dropdown";
//import logo from "../../assets/images/icon/logo1.png";
import logo from "../../assets/images/icon/logo1.png";
import { Button, Col, Container, Row } from "reactstrap";

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

  const [data, setData] = useState([]);

  async function search(key) {
    console.warn(key);

    let result = await fetch(
      "https://desolate-bayou-69148.herokuapp.com/api/search/" + key
    );
    result = await result.json();
    setData(result);
  }

  var showProductList = "";

  showProductList = data.map((item, idx) => {
    return (
      <div className="col-md-6" key={idx}>
        <Link to={`/collections/${item.subcategory.slug}/${item.id}`}>
          <div className="collection-banner">
            <Container className="col-md-6">
              <Row>
                <img
                  src={`https://desolate-bayou-69148.herokuapp.com/${item.image1}`}
                  className="image-fluid  img-round"
                  alt={item.name_product}
                />
              </Row>
            </Container>
          </div>
          <div className="blog-details">
            <div style={{ color: "#000" }}>
              <h4 className="h4-search">{item.name_product}</h4>
            </div>

            <h5 className="text-product">{item.price_product}</h5>
          </div>

          {/*</div>*/}
        </Link>
      </div>
    );
  });

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        {/*Top Header Component*/}

        <nav className="navbar">
          <Link
            to="/"
            className="navbar-logo  button-tp"
            onClick={closeMobileMenu}
          >
            <img
              src={`/assets/images/icon/logo.png`}
              alt=""
              className="phone img-fluid"
            />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <img
            src={logo}
            alt=""
            topClass="top-header"
            className="phone img-fluid"
          />
          <div className="col-7 col-sm-3 col-md-5 col-xl-6 offset-sm-1 button-tp-two navbar-spacing">
            <form class="search">
              <input
                type="text"
                onChange={(e) => search(e.target.value)}
                className="form-control btn-search-new"
                placeholder={t("header-one.menu5")}
              ></input>

              <ul class="results">
                <li>
                  {showProductList}
                  <br />
                </li>
              </ul>
            </form>
          </div>

          <ul className="header-dropdown text-right button-tp-two">
            <li className="mobile-account-user">
            <Button
                className="lang-en lang-text lang-btn"
                onClick={() => i18n.changeLanguage("en")}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
              <Button
                className="lang-es lang-text lang-btn"
                onClick={() => i18n.changeLanguage("es")}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>   
            </li>
          </ul>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {t("header-one.menu1")}
              </Link>
            </li>
            <li
              className="nav-items"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link
                to="/viewfullcategory/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("header-one.menu2")} <i className="fa fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-items">
              <Link
                to="/business/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("header-one.menu3")}
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/contact/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("header-one.menu4")}
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/login/"
                className="nav-links-mobile"
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
