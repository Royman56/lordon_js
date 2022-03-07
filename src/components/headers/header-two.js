import React, { useEffect, useState } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";

const HeaderTwo = ({ logoName, headerClass, topClass, direction }) => {
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header id="sticky" className={`${headerClass}`}>

        <Container>
          <Row>
            <Col>
              <div className="main-menu border-top-0">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      
                    </a>
                  
                  </div>
                </div>
                <div className="brand-logo layout2-logo">
                  <LogoImage logo={logoName} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
           
            </Col>
          </Row>
        </Container>
      </header>

    </div>
  );
};

export default HeaderTwo;
