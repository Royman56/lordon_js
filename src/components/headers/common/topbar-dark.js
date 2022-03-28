import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const TopBarDark = ({ topClass, fluid }) => {

  const [t, i18n] = useTranslation("global");

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
          <Col className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-account-user">
              <Button className=" lang-es lang-text lang-btn" onClick={() => i18n.changeLanguage("es")}>ES
                </Button>
                <Button className="lang-en lang-text lang-btn" onClick={() => i18n.changeLanguage("en")}>EN
                </Button>
                </li>
         
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
