import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Dropdown from '../../headers/Dropdown';

const TopBarDark = ({ topClass, fluid }) => {
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
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col className='text-left'>
            <div>
            <ul className="header-dropdown">
              <li className="mobile-account-user">
                <Link to="/login/"> 
            
                    <i className="fa fa-user" aria-hidden="true"></i>
                
                </Link>
              </li>
              <li className="mobile-account-user">
              <Link to="/search/"> 
                 
                    <i className="fa fa-search" aria-hidden="true"></i>
              
                </Link>
                </li>
         
            </ul>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
   
  );
};

export default TopBarDark;
